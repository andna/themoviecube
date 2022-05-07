import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {GithubData, GithubLogin} from "../../types/GithubData";
import Message from "./Message";


const returnMessage = (type: "need_load" | "limit" | "loading" | "error",
                       errorMessage: string,
                       ) => {
    return <Message errorMessage={errorMessage} type={type}/>
}

describe('Message', () => {

    test('renders needs to load message', () => {
        render(returnMessage('need_load', ''))

        const needsLoad = screen.getByText(/or load it manually:/i);
        expect(needsLoad).toBeInTheDocument();
    });
    test('renders error (Custom)', () => {
        render(returnMessage('error', 'Customized error message'))

        const errorM = screen.getByText(/Customized error message/i);
        expect(errorM).toBeInTheDocument();
    });
    test('renders error (Api Error)', () => {
        render(returnMessage('error', 'API rate limit exceeded for'))

        const errorM = screen.getByText(/wait a few seconds and then try again./i);
        expect(errorM).toBeInTheDocument();
    });


})
