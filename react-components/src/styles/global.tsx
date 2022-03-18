import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { px2vw } from '../utils/px2vw';

export const Global = createGlobalStyle`
 ${normalize}
 
 @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600;700&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #fff;
  }
`;
