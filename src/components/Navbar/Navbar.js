import React, {useState, useEffect} from 'react';
import {BiMenuAltRight, BiX} from 'react-icons/bi'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
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

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=>{
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toogleTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div>
      <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toogleTop}> dolla</NavLogo>
          <NavIcon onClick={handleClick}>
            {click ? <BiX/> : <BiMenuAltRight/> }
          </NavIcon>
          
            <NavMenu onClick={handleClick} click={click}>
              <NavWrapper>
                <NavItem>
                  <NavLink 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  
                  onClick={closeMenu} to="about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="discover">Discover</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-90}
                   onClick={closeMenu} to="signup">Sign Up</NavLink>
                </NavItem>
              </NavWrapper>
                <NavBtn>
                  <NavBtnLink onClick={closeMenu} to="signin"> Explore Now</NavBtnLink>
                </NavBtn>
            </NavMenu>
    
        
        </NavContainer>
      </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
