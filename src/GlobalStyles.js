import styled from 'styled-components'
import {Link} from 'react-router-dom'
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

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary? '#01BF71': '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig? '20px': '16px')};
font-weight: 700;
outline: none;
text-decoration: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all .4s ease;
box-shadow: 0 5px 10px rgba(0,0,0, .2);

&:active{
  transform: translateY(1rem);
}

&:hover{
  background: ${({primary}) => (primary ? '#fff':'#01BF71')}; 
  color: ${({dark}) => (dark ? '#fff' : '#010606')};
  transform: translateY(-1rem);
}
`;