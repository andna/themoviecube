import {render, screen} from "@testing-library/react";
import Box from "../../components/pages/Box";
import React from "react";
import {Canvas} from "@react-three/fiber";
import ReactThreeTestRenderer from "@react-three/test-renderer";

const itemCount = 15;
const term = 'andna';
/*
const items =  [...new Array(itemCount)].map((item, index) => {
    return {
        login: term + '-' + index,
        avatar_url: 'https://avatars.githubusercontent.com/u/11432718?v=4',
        html_url: 'https://github.com/andna',
        type: 'User',
        result_num: 1,
        hide_cause_of_api_limit: false
    } as GithubLogin
});

const tableData: GithubData = {
    incomplete_results: false,
    total_count: itemCount,
    items: items
}
const voided = () => {
    return '';
};

const toRender = <Canvas id="test-canvas">
    <Box tableData={tableData}
                      handleSubmit={voided}
                      needsReset={voided}
                      isLoading={false}
                      pagesQuantiy={2}
                      foundTerm={term}
                      errorMessage={null}
                              setErrorMessage={voided}/>
</Canvas>;



describe('Box', () => {

    test('renders canvas', () => {
        const { container } = render(toRender)

        expect(container.querySelector('#test-canvas')).toBeInTheDocument();
    });
})



/*

export const setHookTestState = (newState: any) => {
const setStateMockFn = () => {};
return Object.keys(newState).reduce((acc, val) => {
    acc = acc?.mockImplementationOnce(() => [newState[val], setStateMockFn]);
    return acc;
}, jest.fn());
};
it('changes the class when hovered', () => {

render(toRender);
const queryByText = screen.queryByText(/Type a user login/i);
expect(queryByText).toBeInTheDocument();
});
*/
