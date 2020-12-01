import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 10;

@media only screen and (max-width: 960px){
 transition: 0.8s all ease;
}
`;
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1400px;

@media only screen and (max-width: 1200px){
 max-width: 1100px;
}
`;
export const NavLogo = styled(LinkR)`
text-decoration: none;
color: #fff;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: 800;
font-size: 2.6rem;
transition: all .3s ease;

&:hover{
  transform: scale(1.1) translateX(.5rem) translateY(.3rem);
  color: #01bf71;
}
`;

export const NavIcon = styled.div`
 display: none;


 @media only screen and (max-width: 1000px){
  display: block;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  
 }
`;

export const NavWrapper = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 1000px){
  display: flex;
  flex-direction: column;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media only screen and (max-width: 1000px){
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: ${({click}) => click ? '0': '-100%'};
  transition: all .5s ease;
}
`;
export const NavItem = styled.li`
height: 80px;
`;
export const NavLink = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.6rem;
height: 100%;
cursor: pointer;
transition: all .3s ease;

&:hover,
&:active{
  color: #01bf71;
}

&:active{
  border-bottom: 3px solid #01bf71;
}

@media only screen and (max-width: 1000px){
  font-size: 2.5rem;

  &:hover,
  &:active{
  transform: scale(1.06);
  border-bottom: 3px solid #01bf71;
  
  }
}

@media only screen and (max-width: 768px){
  font-size: 1.6rem;
}
`;

export const NavBtn = styled.div`
display: flex;
align-items: center;
margin-left: 50px;

@media only screen and (max-width: 1000px){
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-top: 50px;
}
`;
export const NavBtnLink = styled(LinkR)`
text-decoration: none;
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
outline: none;
border: none;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
  background: #fff;
  color: #010606;
}
`;