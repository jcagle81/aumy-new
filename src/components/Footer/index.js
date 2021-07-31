import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer id="footer">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> about</FooterLinkTitle>
                                <FooterLink to='/'></FooterLink>
                                <FooterLink to='/'>register</FooterLink>
                                <FooterLink to='/'>reviews</FooterLink>
                                <FooterLink to='/'>Location</FooterLink>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>something</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> about</FooterLinkTitle>
                                <FooterLink to='/'></FooterLink>
                                <FooterLink to='/'>register</FooterLink>
                                <FooterLink to='/'>reviews</FooterLink>
                                <FooterLink to='/'>Location</FooterLink>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>something</FooterLink>
                        </FooterLinkItems>
                       
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Au My</SocialLogo>
                        <WebsiteRights>Aumy © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target=")_black" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
