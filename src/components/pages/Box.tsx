import * as React from "react";
import * as THREE from 'three'
import {useEffect, useRef, useState} from "react";
import {Euler, useFrame, Vector3} from "@react-three/fiber";
import {Html} from "@react-three/drei";
import {GithubData} from "../../types/GithubData";
import Results from "../templates/Results";
import Search from "../templates/Search";

import {
    aux,
    colorsArr,
    cubePositions,
    cubeSides,
    formatColorToObj, getInfoFromGithubApi, lerp,
    maximumPage,
    setRot
} from "../../utils/services";
import {stylesUtils} from "../../utils/styles";
import Message from "../organisms/Message";


const { box: styles } = stylesUtils;


type Props = {
    tableData: GithubData,
    handleSubmit: (searchTerm?: string) => {},
    needsReset: () => void,
    isLoading: boolean,
    pagesQuantiy: number,
    foundTerm: string,
    errorMessage: string,
    setErrorMessage: (errorMessage: string) => void
}


const Box: React.FC<Props> = ({ pagesQuantiy,
                                tableData,
                                handleSubmit,
                                isLoading,
                                needsReset,
                                foundTerm,
                                errorMessage,
                                setErrorMessage
                              }) => {

    const refBox = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(null);

    const initialAutoRotationSpeedInitial = 0.002;
    const loadingAutoRotationSpeedLoading = 2;

    const [autoRotationSpeed, setAutoRotationSpeed] = useState<number>(initialAutoRotationSpeedInitial)
    const [rotateTo, setRotateTo] = useState<THREE.Mesh["rotation"]>()
    const [angle, setAngle] = useState<number>(1.5)

    const [colorCurrentIndex, setColorCurrentIndex ] = useState<number>(0)
    const [colorChangerCounter, setColorChangerCounter ] = useState<number>(0)
    const [color, setColor ] = useState<string>(colorsArr[colorCurrentIndex])


    const [searchTerm, setSearchTerm] = useState<string>("")
    const [pageOffset, setPageOffset] = useState<number>(0)

    const [isPageLoading, setIsPageLoading] = useState<number>(-1)

    const [loginArray, setLoginArray] = useState([])

    useEffect(() => {
        if(refBox && refBox.current) {
            refBox.current.rotation.x = -0.1
            refBox.current.rotation.y = 0.2
        }
    }, []);


    useFrame((t) => {
        if(refBox && refBox.current) {
            let currentSpeed = autoRotationSpeed;

            if(isLoading){
                currentSpeed = Math.min(autoRotationSpeed, loadingAutoRotationSpeedLoading);
                if(autoRotationSpeed < loadingAutoRotationSpeedLoading){
                    setAutoRotationSpeed((number) => number += 0.01)
                }
            } else {
                if(!foundTerm){
                    setAutoRotationSpeed(initialAutoRotationSpeedInitial);
                    currentSpeed = initialAutoRotationSpeedInitial;
                } else if (!rotateTo) {
                    setAutoRotationSpeed(0);
                    currentSpeed = 0;
                    refBox.current.rotation.y = -aux;
                    refBox.current.rotation.x = -aux;
                }
            }
            if(currentSpeed > 0){
                refBox.current.rotation.y -= currentSpeed;
            }
            if(rotateTo){
               setRot(rotateTo, refBox && refBox.current)
            }

            const time = t.clock.elapsedTime;
            setAngle(time / 2 );
            const notLastColor = colorCurrentIndex + 1 < colorsArr.length;
            if(colorChangerCounter < 1){
                const start = formatColorToObj(colorsArr[colorCurrentIndex]);
                const end = formatColorToObj(colorsArr[notLastColor ? colorCurrentIndex + 1 : 0]);



                const r = Math.round(lerp(start.r, end.r, colorChangerCounter));
                const g = Math.round(lerp(start.g, end.g, colorChangerCounter));
                const b = Math.round(lerp(start.b, end.b, colorChangerCounter));

                setColor('rgb('+r+','+g+','+b+')');
                setColorChangerCounter(prev => prev + 0.004);
            } else {
                setColorChangerCounter(0);
                let index = notLastColor ? colorCurrentIndex + 1 : 0;
                setColorCurrentIndex(index);
            }

        }

    })

    useEffect(() => {
        if(tableData && tableData.items){
            setLoginArray([tableData.items])
            setPageOffset(0)
        }
    }, [tableData])

    const addItemsToLoginArray = (items : GithubData[], index: number) => {
        setLoginArray(oldArray => {
            const newArray = oldArray;
            newArray[index] = items;
            return newArray;
        });
    }

    const chooseRotateTo = (page: number) => {
        let pageToRot = page - pageOffset;

        if(pageToRot >= cubeSides || pageToRot < 0){
            let newOffset = Math.floor(page / cubeSides ) * cubeSides;
            setPageOffset(newOffset)
            pageToRot = page - newOffset;
        }

        if(!loginArray[page]){
            getPageInfo(page )
        }

        setRotateTo(cubePositions[pageToRot].rotTo)

        needsReset()
    }


    const getPageInfo = async (page: number) => {
        getInfoFromGithubApi(searchTerm, page + 1,
            (isLoad)=>{setIsPageLoading(isLoad ? page : -1)},
            () => {},
            (json, foundError) => {
                if(foundError){
                    setErrorMessage(json.message);
                } else {
                    setErrorMessage(null)
                    addItemsToLoginArray(json?.items, page);
                }
                setIsPageLoading(-1)
            },
            (error) => {
                setErrorMessage(error.message);
            },
        )
    }

    return <><mesh
                position={[0,0,0]}
                ref={refBox}>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial color={color} metalness={0.3} roughness={0.5} opacity={1} />
                {cubePositions.map((position, index) => (
                        <Html key={`face-${index}`} distanceFactor={1} transform occlude={true} center
                          position={cubePositions[index].pos as Vector3}
                          rotation={cubePositions[index].rot as Euler}  >

                            <div style={styles.container}>
                                {errorMessage && (foundTerm ? !(loginArray && loginArray[index + pageOffset]) : true) &&
                                <Message type="error" errorMessage={errorMessage}/>}
                                {foundTerm ?
                                    <>
                                        {pagesQuantiy > (index + pageOffset) &&
                                            (index + pageOffset) < maximumPage &&
                                        <div style={styles.results}>
                                            <Results page={index + 1 + pageOffset}
                                                     isLoading={isPageLoading === (index + pageOffset)}
                                                     pageQuantity={pagesQuantiy}
                                                     getPageInfo={getPageInfo}
                                                     loginItems={loginArray[index + pageOffset]}
                                                     chooseRotateTo={chooseRotateTo}/>
                                        </div>
                                        }
                                    </>
                                    :
                                    <div style={styles.form}>
                                        <Search handleSubmit={handleSubmit}
                                                setSearchTerm={setSearchTerm}
                                                setRotateTo={setRotateTo}
                                                searchTerm={searchTerm}/>
                                    </div>
                                }
                            </div>
                    </Html>
                ))}

            </mesh>
        <spotLight position={[0, 100, 300]} angle={angle} penumbra={1} />

        <pointLight position={[-10, -10, -10]} />
    </>
}

export default Box;
