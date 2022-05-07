import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {GithubData, GithubLogin} from "../../types/GithubData";
import Search from "./Search";

const term = 'andna';

const voided = () => {
    return '';
};

const returnSearch = (withTerm: boolean) => {
    return <Search handleSubmit={voided}
                   setSearchTerm={voided}
                   setRotateTo={voided}
                   searchTerm={withTerm ? term : ''} />
}


describe('Search', () => {

    test('renders input with value', () => {
        render(returnSearch(true))

        const label = screen.getByLabelText(/User login to search/i);
        expect(label).toBeInTheDocument();
    });
    test('renders input without value', () => {
        render(returnSearch(false))

        const label = screen.getByLabelText(/Type a user login/i);
        expect(label).toBeInTheDocument();
    });
    test('fire search', () => {
        render(returnSearch(false))
        const form = screen.getByTestId('search-form')
        fireEvent.submit(form)
        expect(form).toBeInTheDocument();
    });
})
