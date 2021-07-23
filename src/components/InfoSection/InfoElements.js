import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : "#000")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
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
        grid-template-areas:
        display: flex;
        justify-content: center;
        align-items: center;
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
`;

export const TopLine = styled.p`
    display: none;
    color: #000;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    
    
    @media screen and (max-width: 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;     

    }
    
`;

export const Heading = styled.h1`

    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 22px;
        font-weight: 600;
        
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const BtnWrapTwo = styled.div`

    display: none;
    justify-content: space-evenly;

    @media screen and (max-width: 480px) {
        display: flex;
    }
`;

export const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 555;
    height: 100%;
`;

export const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
`;






