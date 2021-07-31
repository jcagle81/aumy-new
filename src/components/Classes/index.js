import React, {useState, useEffect} from 'react'
import { ServicesContainer, Servicesh1, ServicesWrapper, ServicesCard, ServicesIcon, Servicesh2, ServicesP, BtnWrap, } from './ClassesElements';
import kinder from '../../images/kinder.jpg';
import junior from '../../images/junior.jpg';
import senior from '../../images/highschool.png'
import {animateScroll as scroll} from 'react-scroll'
import video from '../../video/video.mp4';


const Classes = (primary, dark, dark2) => {

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
        <ServicesContainer>
            
            <Servicesh1>CHƯƠNG TRÌNH TIÊU BIỂU</Servicesh1>
            <ServicesWrapper>
                <BtnWrap scrollNav={scrollNav}
                 to='/kinder'
                 offset={-80}
                 primary={primary ? 1 : 1}
                 dark={dark ? 1 : 1}
                 dark2={dark2 ? 1 : 0}
                 onClick={toggleHome}>
                <ServicesCard >
                    <ServicesIcon src={kinder} />
                    <Servicesh2>ANH VĂN MẪU GIÁO</Servicesh2>
                    <ServicesP>Phương pháp trực quan sinh động kết hợp với tình huống thực tế. Các bé sẽ được học qua các đoạn video , tranh , ảnh, đồ vật thật</ServicesP>
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
                    <ServicesIcon src={junior} />
                    <Servicesh2>ANH VĂN THIẾU NHI</Servicesh2>
                    <ServicesP>Tại ngoại ngữ ÂU MỸ, chương trình Anh Văn thiếu nhi 100% Giáo Viên Bản Ngữ được xây dựng chuyên sâu dành cho độ tuổi thiếu niên nhằm cung... </ServicesP>
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
                    <ServicesIcon src={senior} />
                    <Servicesh2>ANH VĂN THIẾU NIÊN</Servicesh2>
                    <ServicesP>Ở giai đoạn này nếu bạn có định hướng cho trẻ đi du học hoặc học tập trong môi trường quốc tế và hoàn thiện các kỹ năng mềm để có thể chuẩn bị tốt...</ServicesP>
                </ServicesCard>
                </BtnWrap>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Classes;
