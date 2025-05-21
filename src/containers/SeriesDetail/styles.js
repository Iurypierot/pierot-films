import styled from "styled-components";

// Exemplo de exportação
export const Background = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Info = styled.div`
    text-align: center;
    color: #fff;
    max-width: 600px;
    padding: 20px;
`;

export const VideoWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    iframe {
        width: 100%;
        height: 400px;
        border: none;
    }
`;
