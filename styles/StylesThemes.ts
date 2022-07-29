import styled from "styled-components";

export const HomeTheme = styled.div`
  color: ${(props) => props.theme.colors.text} !important;

  transition-property: color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  h1 {
    color: ${(props) => props.theme.colors.text};

    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    a {
      color: ${(props) => props.theme.colors.selected};
    }
  }

  p span {
    background: ${(props) => props.theme.colors.secondary};

    a {
      color: ${(props) => props.theme.colors.selected};
    }
  }

  div a {
    background-color: ${(props) =>
      props.theme.colors.backgroundButton} !important;
    border: solid ${(props) => props.theme.colors.backgroundInput} 1px;

    &:hover {
      color: ${(props) => props.theme.colors.selected} !important;
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

      transition-property: color, background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
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

export const FurukawaAddTheme = styled.div`
  color: ${(props) => props.theme.colors.text} !important;

  transition-property: color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  H1 {
    color: ${(props) => props.theme.colors.text};

    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  label {
    input {
      background-color: ${(e) => e.theme.colors.backgroundInput} !important;

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

export const FormatTheme = styled.div`
  color: ${(props) => props.theme.colors.text} !important;

  transition-property: color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  H1 {
    color: ${(props) => props.theme.colors.text};

    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  label {
    input {
      background-color: ${(e) => e.theme.colors.backgroundInput} !important;

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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: #efebe6;
  transition: all 500ms;
  z-index: 999;
  position: fixed;
  margin-top: 1rem;
  left: calc(50% - var(--size) / 2);

  &:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);
    transform: scale(0.75);
    color: #ffaa00;
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
  }
`;
