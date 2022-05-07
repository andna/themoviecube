import {cubePositions, formatColorToObj, getInfoFromGithubApi, lerp, setRot} from "./services";

test('color should reformat', ()=> {
    expect(formatColorToObj("rgb(0,0,0)")).toStrictEqual({r:0,g:0,b:0})
});

describe('lerp',  () => {
    test('positive ammount', ()=> {
        expect(lerp(250, 50, 2)).toStrictEqual(50)
    });
    test('negative ammount', ()=> {
        expect(lerp(250, 50, -0.4)).toStrictEqual(250)
    });

});

describe('setRot',  () => {
    test("Should resolve High", () => {
        const to = {x: 0.05, y: 1.6, z: 0};
        const current = {rotation: {x: 0.5, y: 1, z: 0,}}
        expect(setRot(cubePositions[4].rotTo, current)).toStrictEqual({x: 0.6, y: 0.9, z: 0.05})
    });
    test("Should resolve Lower", () => {
        const to = {x: -0.05, y: -1.6, z: 0};
        const current = {rotation: {x: -0.5, y: -1, z: 0,}}
        expect(setRot(cubePositions[4].rotTo, current)).toStrictEqual({x: -0.4, y: 0, z: 0.05})
    });

});


test('resolve getInfoFromGithubApi', async ()=> {
    await expect(getInfoFromGithubApi('andna', 1,
        ()=>{},
        ()=>{},
        ()=>{},
        ()=>{},
        ))
})
