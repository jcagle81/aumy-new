import React, {useState, useEffect} from 'react'
import { ServicesContainer, Servicesh1, ServicesWrapper, ServicesCard, ServicesIcon, Servicesh2, ServicesP, BtnWrap} from './PhotosElements';
import inclass from '../../images/inclass.jpg';
import outside from '../../images/outsidelearning.jpg';
import ceremony from '../../images/ceremony.jpg'
import teachers from '../../images/teachers.jpg'
import {animateScroll as scroll} from 'react-scroll'


const LandingPhotos = (primary, dark, dark2) => {

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
        <ServicesContainer id="photos">
            <Servicesh1>Album</Servicesh1>
            <ServicesWrapper>
                <BtnWrap scrollNav={scrollNav}
                 to='/kinder'
                 offset={-80}
                 primary={primary ? 1 : 1}
                 dark={dark ? 1 : 1}
                 dark2={dark2 ? 1 : 0}
                 onClick={toggleHome}>
                <ServicesCard >
                    <ServicesIcon src={inclass} />
                    <Servicesh2>In Class Learning</Servicesh2>
                    <ServicesP>description</ServicesP>
                </ServicesCard>
                </BtnWrap>
                <BtnWrap scrollNav={scrollNav}
                 to='/junior'
                 offset={-80}
                 primary={primary ? 1 : 1}
                 dark={dark ? 1 : 1}
                 dark2={dark2 ? 1 : 0}
                 onClick={toggleHome}>
                <ServicesCard>
                    <ServicesIcon src={outside} />
                    <Servicesh2>Out of Class Learning</Servicesh2>
                    <ServicesP>discription</ServicesP>
                </ServicesCard>
                </BtnWrap>
                <BtnWrap scrollNav={scrollNav}
                 to='/senior'
                 offset={-80}
                 primary={primary ? 1 : 1}
                 dark={dark ? 1 : 1}
                 dark2={dark2 ? 1 : 0}
                 onClick={toggleHome}>
                <ServicesCard>
                    <ServicesIcon src={ceremony} />
                    <Servicesh2>Awards and Ceremonies</Servicesh2>
                    <ServicesP>description</ServicesP>
                </ServicesCard>
                </BtnWrap>
                <BtnWrap scrollNav={scrollNav}
                 to='/senior'
                 offset={-80}
                 primary={primary ? 1 : 1}
                 dark={dark ? 1 : 1}
                 dark2={dark2 ? 1 : 0}
                 onClick={toggleHome}>
                <ServicesCard>
                    <ServicesIcon src={teachers} />
                    <Servicesh2>Teachers</Servicesh2>
                    <ServicesP>Description</ServicesP>
                </ServicesCard>
                </BtnWrap>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default LandingPhotos;
