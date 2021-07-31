import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

    
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1300px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
  
    @media screen and (max-width: 480px) {
        height: 720px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }

    @media screen and (max-width: 480px) {
        
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    
    
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
    
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 480px) {
        padding-left: 35px;
        padding-right: 100px;
    }
    
`;

export const Heading = styled.h1`
    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 0px; 
        display: flex;
        justify-content: center;   
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    font-weight: 700;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        display: flex;
        justify-content: center;
        font-size: 11px;
        line-height: 12px;
    }
  `;

export const Descr1 = styled.h6`
    max-width: 800px;
    margin-bottom: 35px;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 10px;
        line-height: 10px;
       
    }
`;

export const ImgWrap = styled.div`
    max-width: 555;
    height: 100%;

    @media screen and (max-width: 480px) {
               
    }
`;

export const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    width: 30rem;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ImgSm = styled.img`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        
        
    }
`;




