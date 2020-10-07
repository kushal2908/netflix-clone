import styled from 'styled-components/macro'

export const Item = styled.div`
display: flex;
width: 100%;
border-bottom: 2px solid grey;
overflow: hidden;
padding: 50px 0px;
color: white;
`;

export const Inner = styled.div `
    display: flex;    
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    justify-content:space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;     
    padding: 20px 20px;    

    @media (max-width: 1000px) {
        flex-direction: column;        
    }
`;

export const Pane =  styled.div ` 
    width: 50%;
    
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 0px;
        text-align: center;
    }
`;

export const Title =  styled.h1 ` 
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

export const SubTitle =  styled.h2 `
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 16px;
    }

`;

export const Image =  styled.img` 
    max-width: 100%;
    height: auto;
`;

export const Container =  styled.div ``;