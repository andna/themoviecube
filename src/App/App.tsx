import './App.css';
import * as React from "react";
import {Canvas,} from '@react-three/fiber'
import {useRef, useState, Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import Box from "../components/pages/Box";
import useMediaQuery from "../hooks/useMediaQuery";
import {perPageResults, getInfoFromMovieDBApi} from "../utils/services";
import Title from "../components/molecules/Title";
import {exo, stylesUtils} from "../utils/styles";
import {MovieResultsData} from "../types/MovieData";
import {createTheme, CssBaseline, ThemeProvider,} from "@mui/material";

const { app: styles } = stylesUtils;

const theme = createTheme(styles.theme);

const App: React.FC = ( ) => {

    const ref = useRef<OrbitControlsImpl>(null);
    const isMobile = useMediaQuery(900);


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [navigateNextCube, setNavigateNextCube] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>(null)

    const [pagesQuantity, setPagesQuantity] = useState<number>(0)
    const [foundTerm, setFoundTerm] = useState<string>("")
    const [tableData, setTableData] = useState<MovieResultsData>(null)
    const [postersOnly, setPostersOnly] = useState<boolean>(false)

    const getInfo = async (searchTerm: string, page: number = 1) => {
        getInfoFromMovieDBApi(searchTerm, page,
            setIsLoading,
            () => {
                setIsLoading(false);
                setTableData(null);
                setFoundTerm(null);
            },
            (json, foundError) => {
                fakeDelayOffAutoRotation(json, searchTerm, foundError ? json.message : null);
            },
            (error) => {
                fakeDelayOffAutoRotation(error, searchTerm, error && error.message);
            },
            )
    }

    const fakeDelayOffAutoRotation = ( data: MovieResultsData, searchTerm: string, errorMessage: string = null) => {
        setTimeout(() => {
            setIsLoading(false);
            if(errorMessage){
                setPagesQuantity( 0)
                setTableData(null)
                setFoundTerm(null)
                setErrorMessage(errorMessage)
            }else{
                reset()
                setPagesQuantity(Math.ceil(data.total_results / perPageResults) )
                setTableData(data)
                setFoundTerm(searchTerm);
                setErrorMessage(null)
            }
        }, errorMessage ? 10 : 600);
    }

    const reset = () => {
        if(ref && ref.current){
            ref.current.reset();
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{...styles.grid,
            ...(isMobile ? styles.gridPortrait : styles.gridLandscape)}}>

            <div></div>
            <Canvas style={styles.canvas}
                          camera={{ fov: isMobile ? 4.2 : 3, position: [0, 0, 30] }}>
                          <ambientLight intensity={0.7} />
                          <Suspense fallback={<></>}>
                              <Box pagesQuantiy={pagesQuantity}
                                   tableData={tableData}
                                   needsReset={reset}
                                   handleSubmit={getInfo}
                                   foundTerm={foundTerm}
                                   errorMessage={errorMessage}
                                   setErrorMessage={setErrorMessage}
                                   postersOnly={postersOnly}
                                   navigateNextCube={navigateNextCube}
                                   setPostersOnly={setPostersOnly}
                                   isLoading={isLoading}/>
                          </Suspense>
                          <OrbitControls
                              ref={ref}
                              enablePan={false}
                              rotateSpeed={isMobile ? 2 :0.4}/>
            </Canvas>
            <div id="only-for-test-purposes" style={{display: 'none'}}>
                <span onClick={()=>getInfo('andna')}
                      data-testid="getInfo">g</span>
                <span onClick={()=>fakeDelayOffAutoRotation({total_results: 10, results: [], page: 1, total_pages: 1},
                    'andna', null)}
                      data-testid="fakeAutoRotation">f</span>
                <span onClick={()=>reset()} data-testid="reset">r</span>
            </div>
      </div>
        </ThemeProvider>
  )
}
export default App;
