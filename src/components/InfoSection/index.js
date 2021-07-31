import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonElement2'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,  TopLine, Heading, Subtitle, BtnWrap, BtnWrapTwo, ImgWrap, Img } from './InfoElements';
import {animateScroll as scroll} from 'react-scroll'

const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {

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
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <TopLine>{topLine}</TopLine>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap scrollNav={scrollNav}>
                             
                                    <Button  to='/aumy'
                                    offset={-80}
                                    primary={primary ? 1 : 1}
                                    dark={dark ? 1 : 1}
                                    dark2={dark2 ? 1 : 0}
                                    onClick={toggleHome}>{buttonLabel}</Button>
                                
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt} />
                        </ImgWrap>
                        <BtnWrapTwo scrollNav={scrollNav}>
                                <Button to='aumy'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 1}
                                dark={dark ? 1 : 1}
                                dark2={dark2 ? 1 : 0}
                                onClick={toggleHome}>{buttonLabel}</Button>
                            </BtnWrapTwo>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
