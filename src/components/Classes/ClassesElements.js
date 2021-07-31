import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 900px;
        align-items: center;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0auto;
    display: grid;
    grid-template-columns: 5fr 5fr 5fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
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

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    padding:30px;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px 10px #D8261C;
    

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 190px;
        align-items: center;
       
    }

    &:hover {
        transform: scale(1.25);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img `
    height: 160px;
    width: 220px;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        height: 175px;
        width: 250px;
        margin-bottom: 0px;
    }
`;

export const Servicesh1 = styled.h1`
    font-size: 2.7rem;
    color: #000;
    margin-bottom: 32px;

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        padding-top: 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Servicesh2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10;
`;

export const ServicesP = styled.p`
    display: block;
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;





