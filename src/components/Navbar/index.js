import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import logo from '../../images/logo.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"><img src={logo} height="70" width="80" /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">about</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Classes</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Photo Library</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">News and Events</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">signin</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
