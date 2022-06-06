import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background} !important;
    font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a,
  input[type="number"],
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    color: inherit;
    text-decoration: none;
    -webkit-appearance: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    overflow-x: hidden;
  }
`;
