import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box'
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors['gray-600']};
    color: ${(props) => props.theme.colors['gray-100']};
  }

  body, input, textarea, button {
    font: ${(props) =>
      `${props.theme.fontWeight.normal} ${props.theme.fontSize.md} Inter, sans-serif`};
  }
`;
