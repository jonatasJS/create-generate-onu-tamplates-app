import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background} !important;
    font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  button {
    background-color: ${(props) =>
			props.theme.colors.backgroundButton} !important;
    color: ${(props) => props.theme.colors.text} !important;

    transition-property: color, background-color;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.selected} !important;
			transition-property: color;
			transition-duration: 0.1s;
			transition-timing-function: linear;
    }
  }

  a,
  p,
  h1,
  h2,
  h3,
  span,
  input[type="number"],
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    text-decoration: none;
    -webkit-appearance: none;
    overflow-y: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* user-select: none; */
    overflow-x: hidden;
  }
`;
