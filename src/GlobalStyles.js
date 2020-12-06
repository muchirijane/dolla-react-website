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

  @media only screen and (min-width: 1400px) {
    font-size: 75%;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 85%;
  }
  @media only screen and (min-width: 1900px) {
    font-size: 95%;
  }
  @media only screen and (min-width: 2200px) {
    font-size: 100%;
  }
}

body{
  font-family: 'Nunito', sans-serif;
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 400;
}

//scrollbar
::-webkit-scrollbar{
    width: 18px;
}

::-webkit-scrollbar-thumb{
    background-color: #01BF71;
    height: 10rem;
    border-radius: 10px;
    margin-right: 2px;
    :hover{
        background-color: #039458;
    }
}
::-webkit-scrollbar-track{
    border: 1px solid #010606;
    background: #010606;
    box-shadow: inset 0 0 2px 2px rgba(0,0,0, .05)
}
`;

export default GlobalStyle;

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary? '#01BF71': '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#fff' : '#010606')};
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
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  transform: translateY(-1rem);
}
`;