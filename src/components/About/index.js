import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,  Heading, Subtitle, ImgWrap, Img, ImgSm, Descr1, } from './AboutElement';
 
const About = ({lightBg, id, imgStart, lightText, headline, darkText, description, img1,img2, img3, alt, info1, info2, info3, info4, info5, info6, info7, info8}) => {
    return (
        <div style={{backgroundImage: 'linear-gradient(to bottom, #D8261C, #fff)'}}>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Descr1 darkText={darkText}>{info1}</Descr1>
                            <Descr1 darkText={darkText}>{info2}</Descr1>
                            <Descr1 darkText={darkText}>{info3}</Descr1>
                            <Descr1 darkText={darkText}>{info4}</Descr1>
                            <Descr1 darkText={darkText}>{info5}</Descr1>
                            <Descr1 darkText={darkText}>{info6}</Descr1>
                            <Descr1 darkText={darkText}>{info7}</Descr1>
                            <Descr1 darkText={darkText}>{info8}</Descr1>
                            <ImgSm src={img3} />
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={img1} alt={alt} />
                            </ImgWrap>
                            <ImgWrap>
                            <Img src={img2} alt={alt} />
                            </ImgWrap>
                            <ImgWrap>
                            <Img src={img3} alt={alt} />
                            </ImgWrap>
                            
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default About;
