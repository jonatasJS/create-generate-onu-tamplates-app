import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeTheme = styled.div`
	color: ${(props) => props.theme.colors.text} !important;

	transition-property: color, background-color;
	transition-duration: 0.3s;
	transition-timing-function: ease-in-out;

	main div span h1 {
		color: ${(props) => props.theme.colors.text};

		transition-property: color, background-color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;

		a {
			background-color: transparent !important;
			color: ${(props) => props.theme.colors.selected};
		}
	}

	main div span h1 a[target="_blank"] {
		background: ${(props) => props.theme.colors.backgroundButton} !important;
		font-size: 1.5rem;
		text-align: center;
		border: 0;
		margin: 0;
		border-radius: 15px;
		cursor: pointer;
		padding: 2rem 0.1rem;
		color: ${(props) => props.theme.colors.selected};
	}

	main div {
		a {
			background-color: ${(props) =>
		props.theme.colors.backgroundButton} !important;
			border: solid ${(props) => props.theme.colors.backgroundInput} 1px;

			&:hover {
				color: ${(props) => props.theme.colors.selected} !important;
			}
		}
	}
`;

export const FurukawaTheme = styled.div`
	color: ${(props) => props.theme.colors.text} !important;

	transition-property: color, background-color;
	transition-duration: 0.3s;
	transition-timing-function: ease-in-out;

	h1 {
		color: ${(props) => props.theme.colors.text};

		transition-property: color, background-color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	div a {
		background-color: ${(props) =>
		props.theme.colors.backgroundButton} !important;
		border: solid ${(props) => props.theme.colors.backgroundInput} 1px;
	}
`;

export const FurukawaRemoveTheme = styled.div`
	color: ${(props) => props.theme.colors.text} !important;

	transition-property: color, background-color;
	transition-duration: 0.3s;
	transition-timing-function: ease-in-out;

	h1 {
		color: ${(props) => props.theme.colors.text};

		transition-property: color, background-color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	label {
		transition: transform 0.2s linear, top 0.2s linear;

		input {
			background-color: ${(e) => e.theme.colors.backgroundInput} !important;
			color: ${(e) => e.theme.colors.text} !important;

			transition-property: color, background-color;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;

			::placeholder {
				color: ${(e) => e.theme.colors.text} !important;
			}
		}

		input:nth-child(2) {
			&:hover {
				background-color: #008200 !important;
			}
		}

		span {
			color: ${(e) => e.theme.colors.text} !important;

			transition-property: color, background-color;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;

			transition: transform 0.1s linear, top 0.1s linear, border 0.1s linear;
		}
	}
`;

export const Btns = styled.div`
	@media (min-width: 768px) {
		flex-direction: "row" !important;
	}
`;

export const FurukawaAddTheme = styled.div`
	color: ${(props) => props.theme.colors.text} !important;

	transition-property: color, background-color;
	transition-duration: 0.3s;
	transition-timing-function: ease-in-out;

	h1 {
		color: ${(props) => props.theme.colors.text};

		transition-property: color, background-color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	label {
		transition: transform 0.2s linear, top 0.2s linear;

		input {
			background-color: ${(e) => e.theme.colors.backgroundInput} !important;
			color: ${(e) => e.theme.colors.text} !important;

			transition-property: color, background-color;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;

			::placeholder {
				color: ${(e) => e.theme.colors.text} !important;
			}
		}

		span {
			color: ${(e) => e.theme.colors.text} !important;

			transition-property: color, background-color;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;

			transition: transform 0.1s linear, top 0.1s linear, border 0.1s linear;
		}
	}
`;

export const FormatTheme = styled.div`
	color: ${(props) => props.theme.colors.text} !important;

	transition-property: color, background-color;
	transition-duration: 0.3s;
	transition-timing-function: ease-in-out;

	h1 {
		color: ${(props) => props.theme.colors.text};

		transition-property: color, background-color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	label {
		input {
			background-color: ${(e) => e.theme.colors.backgroundInput} !important;
			color: ${(e) => e.theme.colors.text} !important;

			transition-property: color, background-color;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;
		}

		span {
			color: ${(e) => e.theme.colors.text} !important;

			transition-property: color, background-color;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;
		}
	}
`;

export const LoginTheme = styled.div`
	color: ${(props) => props.theme.colors.text} !important;
	background: ${(props) => props.theme.colors.background} !important;
	width: 100vw;
	height: 100vh;

	transition-property: color, background-color;
	transition-duration: 0.3s;
	transition-timing-function: ease-in-out;

	div[title="Perfil"] {
		transition: outline 0.2s linear;

		:hover {
			outline: ${(props) => props.theme.colors.primary} solid 3px;
		}
	}

	a {
		color: ${(props) => props.theme.colors.text};
		background: ${(props) => props.theme.colors.backgroundButton} !important;

		&:hover {
			color: ${(props) => props.theme.colors.selected} !important;
		}
	}
`;

export const InputToggleTheme = styled.input`
	--size: 2rem;
	--ray-size: calc(var(--size) * -0.4);
	--offset-orthogonal: calc(var(--size) * 0.65);
	--offset-diagonal: calc(var(--size) * 0.45);
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	cursor: pointer;
	width: var(--size);
	height: var(--size);
	border-radius: 999px;
	transition: all 500ms;
	z-index: 999;
	color: #ffaa00;
	position: fixed;
	margin-top: 1rem;
	top: 1.5rem;
	left: calc(50% - var(--size) / 2);
	box-shadow: inset 0 0 0 var(--size),
		calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
		var(--offset-orthogonal) 0 0 var(--ray-size),
		0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
		0 var(--offset-orthogonal) 0 var(--ray-size),
		calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
			var(--ray-size),
		var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
		calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
		var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);

	&:checked {
		transform: scale(0.75);
		color: #333637;
		box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
	}
`;

export const ListStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    justify-content: start;
		overflow-y: auto;
	height: auto;
	max-height: 90%;
    margin-top: 15%;
	width: 30%;
	position: absolute;
	right: 10px;
	text-align: center;
	z-index: 4;
	opacity: 0;
	transform: opacity 1s ease-in-out;
`;

export const ListItem = styled(motion.li)`
			display: flex;
			flex-direction: column;
			width: 90%;
	list-style: none;
	outline: 1px solid #363636;
		overflow: hidden;
	border-radius: 5px;
	padding: 10px;
	width: 50%;
	margin: 10px auto;
	cursor: pointer;
	font-weight: bold;
	background-color: ${(props) => props.theme.colors.backgroundButton};

	&:hover {
		background-color: ${(props) => props.theme.colors.backgroundInput};
	}

	span {
		cursor: pointer;
	}

	:hover {
		outline: 3px solid ${(e) => e.theme.colors.selected};
		/* color: ${(e) => e.theme.colors.selected}; */
		/* text-shadow: ${(e) => e.theme.colors.selected} 0px 0px 10px; */
		font-weight: bold;
	}
`;

export const HeaderListStyle = styled.div`
	display: flex;
	justify-content: center;
	gap: 5rem;
	align-items: center;
	background: transparent !important;
	color: ${(props) => props.theme.colors.text} !important;

	h2 {
		position: fixed;
		margin-bottom: 10%;
	}

	span {
		margin-bottom: 5%;
		width: 50%;
		border-bottom: 1px solid ${(e) => e.theme.colors.backgroundInput};
	}
`;
