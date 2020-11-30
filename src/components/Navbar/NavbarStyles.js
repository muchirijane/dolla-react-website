import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {HiOutlineMenuAlt3} from 'react-icons/hi'

export const Nav = styled.nav`
background: #000;
height: 80px;
/* margin-top: -80px; */
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
/* justify-self: flex-start; */
display: flex;
align-items: center;
margin-left: 24px;
font-weight: 800;
font-size: 2.4rem;
`;

export const NavIcon = styled(HiOutlineMenuAlt3)`
 display: none;

 @media only screen and (max-width: 1000px){
  display: block;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
 }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media only screen and (max-width: 768px){
  display: none;
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

&:active{
  border-bottom: 3px solid #01bf71;
}
`;

export const NavBtn = styled.div`
display: flex;
align-items: center;

@media only screen and (max-width: 768px){
  display: none;
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