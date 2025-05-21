import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    

    img {
        border-radius: 30px;
        width: 300px;
        height: auto;
        

        @media (max-width: 768px) {
            width: 250px;
        }

        @media (max-width: 480px) {
            width: 200px;
        }
    }

    h3 {
        color: #ffffff;
        margin-top: 15px;
        font-size: 1.5rem;

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }
`
