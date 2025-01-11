"use client"
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root {
        --bg: #181B23;
        --bg-two: #1F2029;
        --white: #fff;
        --white-two: #EEEEF2;
        --pink: #D53F8C;
        --purple: #9F7AEA;
        --gray: #9699B0;
        --gray-two: #797D9A;
    }

    body {
        background: var(--bg);
        color: var(--white);
    }
`

export const GlobalStyle = () => {
    return <Global />
}