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

	div[class="Toastify"] button {
		background-color: transparent !important;
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

	input[type="submit"] {
		color: ${(props) => {
			if (props.theme.title === "light") {
				return "#fff";
			}
			return props.theme.colors.text;
		}} !important;
		background-color: ${(props) => props.theme.colors.backgroundButton} !important;
		text-align: center;

		&:hover {
			z-index: 999;
			background-color: ${(props) => props.theme.colors.backgroundInput} !important;
		}

		@media (max-width: 1068px) {
			width: 80%;
		}
	}

	.Typewriter {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		height: 100%;
		margin-bottom: 4rem;

		.Typewriter__wrapper {
			text-align: center;
			display: flex;
			flex-direction: center;
			align-items: center;
			height: 100%;
			span {
				background-color: transparent;

				&:hover a {
					color: ${(props) => props.theme.colors.selected} !important;
					text-decoration: underline !important;
				}
			}

			a {
				color: ${(props) => props.theme.colors.selected} !important;
				:hover a {
					text-decoration: underline !important;
				}
			}

			&:hover a {
				text-decoration: underline !important;
			}
		}

		.Typewriter__cursor {
			transform: scale(1.2) !important;
			font-size: 2rem;
			text-align: center;
		}
	}

  a,
  p,
  h1,
  h2,
  h3,
  span,
  input[type="number"],
	input[type=number]::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-butto {
    text-decoration: none;
    -webkit-appearance: none;
    overflow-y: hidden;
   -moz-appearance: none;
   appearance: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* user-select: none; */
    overflow-x: hidden;
  }
`;
