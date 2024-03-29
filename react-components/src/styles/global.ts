import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { px2vw } from './px2vw';
import { LIGHT_GRAY, WHITE } from './constants';

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
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1600px) {
        font-size: ${px2vw(14)};
      }
    }

  body, html {
    height: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: ${WHITE};
    background-color: ${LIGHT_GRAY};
  }

  #root{
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;
