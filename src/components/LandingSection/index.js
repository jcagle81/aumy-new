import React, {useState} from 'react';
import video from '../../video/video.mp4';
import {Button} from '../ButtonElement';
import logo from '../../images/logo.png';
import { LandingContainer, LandingBg, VideoBg, LandingContent, LandingH1, LandingP, LandingBtnWrapper, ArrowForward, ArrowRight, BackgroundFilter } from './LandingElements';

const Landing = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <LandingContainer id="home">
            <LandingBg>
                <BackgroundFilter>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                </BackgroundFilter>
            </LandingBg>
            <LandingContent>
                <img src={logo} height="280px" />
                <LandingH1> TRUNG TÂM NGOẠI NGỮ ÂU MỸ</LandingH1>
                <LandingP>
                Thành công của bạn là mục tiêu của chúng tôi!
                </LandingP>
                <LandingBtnWrapper>
                    <Button to="register" onMouseEnter={onHover} onMouseLeave={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </LandingBtnWrapper>
            </LandingContent>
        </LandingContainer>
    )
}

export default Landing
