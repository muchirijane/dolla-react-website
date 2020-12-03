import React, {useState} from 'react';
import {BiMenuAltRight, BiX} from 'react-icons/bi'
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavWrapper,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from './NavbarStyles'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = ()=> setClick(!click);
  const closeMenu = ()=> setClick(false);
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo to="/"> dolla</NavLogo>
          <NavIcon onClick={handleClick}>
            {click ? <BiX/> : <BiMenuAltRight/> }
          </NavIcon>
          
            <NavMenu onClick={handleClick} click={click}>
              <NavWrapper>
                <NavItem>
                  <NavLink onClick={closeMenu} to="about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={closeMenu} to="discover">Discover</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={closeMenu} to="services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={closeMenu} to="signup">Sign Up</NavLink>
                </NavItem>
              </NavWrapper>
                <NavBtn>
                  <NavBtnLink onClick={closeMenu} to="signin"> Explore Now</NavBtnLink>
                </NavBtn>
            </NavMenu>
    
        
        </NavContainer>
      </Nav>
    </div>
  )
}

export default Navbar
