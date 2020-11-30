import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from './NavbarStyles'

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo to="/"> dolla</NavLogo>
          <NavIcon/>
          <NavMenu>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </NavItem>
          </NavMenu>
        
        </NavContainer>
        <NavBtn>
          <NavBtnLink to="/sign-up"> Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  )
}

export default Navbar
