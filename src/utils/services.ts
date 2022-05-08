import * as THREE from 'three'

export const links =
    {
        altImage:
            'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg',
        limit1000:
            'https://docs.github.com/en/rest/search' +
            '#:~:text=to%20satisfy%20that%20need%2C%20the%20github%20search%20api%20provides%20up%20' +
            'to%201%2C000%20results%20for%20each%20search.',
        limitPerMinute:
            'https://docs.github.com/en/rest/search' +
            '#:~:text=the%20search%20api%20has%20a%20custom%20rate%20limit.%20for%20requests%20using' +
            '%20basic%20authentication%2C%20oauth%2C%20or%20client%20id%20and%20secret%2C%20you%20can%20' +
            'make%20up%20to%2030%20requests%20per%20minute.%20for%20unauthenticated%20requests%2C%20the%20' +
            'rate%20limit%20allows%20you%20to%20make%20up%20to%2010%20requests%20per%20minute.'
    }

    export const superSlow = 0.0007;
export const cubeSides = 5;
export const perPageResults = 4;
export const maximumItems = 1000;
export const maximumPage = 10001; //Math.floor(maximumItems/perPageResults) + 1;
const pos = { half: 0.505, init: 0};
const halfPi = Math.PI / 2;


export const aux = 0.2; //for beauty purposes

/*
export const cubePositions = [
    { pos: [0, pos.init, pos.half],     rot: [0,0,0],           rotTo: {x: aux, y: -aux, z: 0} as THREE.Euler},
    { pos: [pos.half, pos.init, 0],     rot: [0, halfPi, 0],    rotTo: {x: aux, y:-halfPi - aux, z: 0} as THREE.Euler },
    { pos: [0, pos.init, -pos.half],    rot: [0, halfPi*2, 0],  rotTo: {x: aux, y:(-halfPi*2) - aux, z: 0} as THREE.Euler },
    { pos: [-pos.half, pos.init, 0],    rot: [0, halfPi*3, 0],  rotTo: {x: aux, y:(-halfPi*3) - aux, z: 0} as THREE.Euler },
    { pos: [0, -pos.half, pos.init],    rot: [halfPi, 0, 0],    rotTo: {x: halfPi*3 + aux, y: 0, z: -aux} as THREE.Euler },//rotTo: {x: halfPi + aux - 0.018, y: aux / 2 - 0.11, z: aux} as THREE.Euler },
    { pos: [0, pos.half, -pos.init],    rot: [halfPi*3, 0, 0],  rotTo: {x: halfPi - aux, y: 0, z: aux} as THREE.Euler },
];
 */

export const cubePositions = [
    { pos: [0, pos.init, pos.half],     rot: [0,0,0],           rotTo: {x: aux, y: -aux, z: 0} as THREE.Euler},
    { pos: [pos.half, pos.init, 0],     rot: [0, halfPi, 0],    rotTo: {x: aux, y:-halfPi - aux, z: 0} as THREE.Euler },
    { pos: [0, pos.init, -pos.half],    rot: [0, halfPi*2, 0],  rotTo: {x: aux, y:(-halfPi*2) - aux, z: 0} as THREE.Euler },
    { pos: [-pos.half, pos.init, 0],    rot: [0, halfPi*3, 0],  rotTo: {x: aux, y:(-halfPi*3) - aux, z: 0} as THREE.Euler },
    { pos: [0, pos.half, -pos.init],    rot: [halfPi*3, 0, 0],    rotTo: {x: halfPi + aux - 0.018, y: aux / 2 - 0.11, z: aux} as THREE.Euler },
    {  pos: [0, -pos.half, pos.init],    rot: [halfPi, 0, 0],   rotTo: {x: halfPi - aux, y: 0, z: aux} as THREE.Euler },
];

export const colorsArr = [
    "rgb(105,240,236)",
    "rgb(163,147,220)",
    "rgb(102,111,161)",
    "rgb(124,199,177)",
    "rgb(218,232,157)",
];

export const formatColorToObj = (stringColor : string) => {
    var formatted = stringColor.replace("rgb(","").replace(")","")
        .split(",");
    return {r: parseInt(formatted[0]), g: parseInt(formatted[1]), b: parseInt(formatted[2])}
}


export const setRot = (rotateToData: THREE.Mesh["rotation"], current : any) => {
    ['x','y','z'].forEach(axis => {
        const key = axis as keyof THREE.Mesh["rotation"];
        const higherThan0 = (rotateToData[key] > 0);
        current.rotation[key] += higherThan0 ? 0.1 : -0.1;
        current.rotation[key] = higherThan0 ?
            Math.min(current.rotation[key],  rotateToData[key] as number)
            :
            Math.max(current.rotation[key], rotateToData[key] as number);
    })
    return current.rotation;
}

export const lerp = (value1: number, value2: number, amount: number) => {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
}

export const getInfoFromGithubApi = async (searchTerm: string,
                       page: number = 1,
                       setIsLoading: (isLoading : boolean) => void,
                       doIfSearchNull: () => void,
                       doIfFoundJson: (json: any, foundError: boolean) => void,
                       doIfCatchError: (error: any) => void
                       ) => {
    if(searchTerm){
        setIsLoading(true);
        let foundError = false;
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=5a7968a876a411752c75c56adddaf01a&query=${searchTerm}&page=${page}`)
            .then(response => {
                foundError = response.status === 403;
                return response.json();
            })
            .then(json => {
                doIfFoundJson(json, foundError);
            })
            .catch(e => {
                doIfCatchError(e);
            })
    }else{
        doIfSearchNull();
        setIsLoading(false);
    }
}
