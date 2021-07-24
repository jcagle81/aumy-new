import React from 'react'
import { Button } from '../ButtonElement2'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,  TopLine, Heading, Subtitle, BtnWrap, BtnWrapTwo, ImgWrap, Img } from './InfoElements';

const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
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
                            <BtnWrap>
                                <Link to='/aumy'>
                                    <Button 
                                    offset={-80}
                                    primary={primary ? 1 : 1}
                                    dark={dark ? 1 : 1}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </Link>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt} />
                        </ImgWrap>
                        <BtnWrapTwo>
                                <Button to='aumy'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 1}
                                dark={dark ? 1 : 1}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrapTwo>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
