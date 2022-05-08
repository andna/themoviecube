import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Results from "./Results";

/*
const itemCount = 15;
const term = 'andna';

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

const voided = () => {
    return '';
};

const returnResults = (isLoading: boolean, itemsF: GithubLogin[], page: number = 2) => {
    return <Results page={page}
                    loginItems={itemsF}
                    chooseRotateTo={voided}
                    getPageInfo={voided}
                    pageQuantity={10}
                    isLoading={isLoading}/>
}

const loginText = /login/i
const typeText = /type/i
const headerText = /Result #/i

describe('Results', () => {

    test('renders result table header', () => {
        render(returnResults(false, items))

        const header = screen.getByText(headerText);
        expect(header).toBeInTheDocument();
    });

    test('NOT renders result table header when loading', () => {
        render(returnResults(true, null))

        const header = screen.queryAllByText(headerText);
        expect(header.length).toBe(0);
    });
    test('over page 112 shows message', () => {
        render(returnResults(false, items, 200))

        const header = screen.getByText(/reached the limit number of results/i);
        expect(header).toBeInTheDocument();
    });
    it('clicks all sorts', () => {
        render(returnResults(false, items, 200))

        const loginHeader = screen.getByText(loginText);
        fireEvent.click(loginHeader)
        fireEvent.click(loginHeader)
        const header = screen.getByText(headerText);
        fireEvent.click(header)
        fireEvent.click(header)
        const typeHeader = screen.getByText(typeText);
        fireEvent.click(typeHeader)
        fireEvent.click(typeHeader)
    });
})


 */
