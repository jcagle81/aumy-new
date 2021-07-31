import React, {useState, useEffect} from 'react';
import {Button} from '../ButtonElement';
import { NewsContainer, NewsBg, ImgBg, NewsContent, NewsH1, BackgroundFilter, BtnWrap, NewsIcon, ArrowForward, ArrowRight  } from './NewsElements';
import img from '../../images/bgimg.jpg';
import newscol from '../../images/newscol.jpg';
import {animateScroll as scroll} from 'react-scroll'

const News = () => {

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

    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <NewsContainer id="news">
            <NewsBg>
                <BackgroundFilter>
                <ImgBg src={img} type='bgimg' />
                </BackgroundFilter>
            </NewsBg>
            <NewsContent>
                <NewsH1>Tin tức và sự kiện</NewsH1>
                
                <NewsIcon src={newscol} />
                <BtnWrap scrollNav={scrollNav}>
                
                <Button to="footer" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover} 
                onMouseLeave={onHover} 
                primary="true" 
                dark="true" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                onClick={toggleHome} >
                Xem thêm {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> */
                
                </BtnWrap>
            </NewsContent>
        </NewsContainer>
    )
}


export default News
