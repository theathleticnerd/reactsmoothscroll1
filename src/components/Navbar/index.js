import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">MindHack</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Overview</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Schedule</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Speakers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Venue</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Tickets</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
