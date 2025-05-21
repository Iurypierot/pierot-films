import styled from 'styled-components'

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
`

export const Container = styled.div`
    z-index: 99;
    background: #000;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 40px;
    max-width: 900px;
    

    @media (max-width: 768px) {
        width: 90%;
        padding: 20px;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 15px;
    }

    iframe {
        width: 100%;
        height: 500px;

        @media (max-width: 768px) {
            height: 350px;
        }

        @media (max-width: 480px) {
            height: 250px;
        }
    }
`
