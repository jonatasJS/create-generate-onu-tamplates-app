import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      selected: string;
      background: string;
      backgroundInput: string;
      backgroundButton: string;
      text: string;
    }
  }
}