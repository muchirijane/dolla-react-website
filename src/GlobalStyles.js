import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap');
*{
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after{
  box-sizing: inherit;
}

html{
  box-sizing: border-box;
  font-size: 62.5%;
}

body{
  /* font-family: 'Encode Sans Expanded', sans-serif; */
  font-family: 'Nunito', sans-serif;
  font-size: 1.6rem;
  line-height: 1.6;
}
`;

export default GlobalStyle;