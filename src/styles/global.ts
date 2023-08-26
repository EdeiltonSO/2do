import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./themes/dark";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${darkTheme.gray600};
        color: ${darkTheme.gray100};
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.4rem;
    }
`;