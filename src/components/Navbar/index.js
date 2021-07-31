import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import logo from '../../images/logo.png';
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {
const [scrollNav, setScrollNav] = useState(false)

const changeNav = ()=> {
    if (window.scrollY >= 80) {
        setScrollNav(true)
    }  else{
        setScrollNav(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])
     
const toggleHome = () => {
    scroll.scrollToTop();
}
           
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}><img src={logo} height="65" width="75" /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Giới thiệu</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="classes" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Nhiều lớp học</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="photos" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Thư viện ảnh</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="news" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Tin tức và sự kiện</NavLinks>
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
