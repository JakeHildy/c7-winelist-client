import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 16px;
        height: 100%;
        width: 100%;
    }

    body {
        background: ${({ theme }) => {
          console.log(theme);
          return theme.local__ui.backgroundColor;
        }}
    }
`;

export default GlobalStyles;
