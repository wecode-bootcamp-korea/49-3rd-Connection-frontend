import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color : ${props => props.theme.grayscaleC};
    background-color : ${props => props.theme.grayscaleB};
  }
`;

export default GlobalStyle;
