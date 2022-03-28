import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { px2vw } from './px2vw';
import { LIGHT_GRAY, WHITE } from './colorConstats';

export const Global = createGlobalStyle`
 ${normalize}
 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      font-size: ${px2vw(26)};

      @media (min-width: 768px) {
        font-size: ${px2vw(16)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1440px) {
        font-size: ${px2vw(20)};
      }
    }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: ${WHITE};
    background-color: ${LIGHT_GRAY};

  }
`;
