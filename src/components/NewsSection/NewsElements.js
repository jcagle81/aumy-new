import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import { Link as LinkR } from 'react-router-dom';

export const NewsContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 750px;
    position: relative;
    z-index: 1;

    :before{
        
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 0%);
        z-index: 2;
    }
`;

export const NewsBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(38, 70, 83, 1);
display: flex;
flex-direction: column;
`;

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
`;

export const NewsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NewsH1 = styled.h1`
    color: #fff;
    background-color: #000;
    font-size: 48px;
    text-align: center;
    /* margin-bottom: 15em; */

    @media screen and (max-width: 768px) {
        font-size:40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const NewsP = styled.p`
    margin-top: 24px;
    color: #fff;
    /* background-color: #000; */
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size:24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const BtnWrap = styled(LinkR)`
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
    color: #000;
    
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const NewsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 290px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    padding:30px;
    transition: all 0.2s ease-in-out;
    margin-top: 14em;
    
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 190px;
        align-items: center;
       
    }

    /* &:hover {
        transform: scale(1.25);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } */
`;

export const Newsh1 = styled.h1`
    font-size: 2.7rem;
    color: #fff;
    margin-bottom: 32px;

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        padding-top: 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Newsh2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10;
`;



export const NewsIcon = styled.img `
    height: 320px;
    width: 440px;
    margin-top: 11em;
    

    @media screen and (max-width: 480px) {
        height: 175px;
        width: 250px;
        margin-bottom: 0px;
    }

    /* &:hover {
        transform: scale(1.25);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } */
`;

// export const LandingBtnWrapper = styled.div`
//     margin-top: 32px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: -0em;
// `;

