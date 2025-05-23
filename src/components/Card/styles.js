import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: #111;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(255, 0, 0, 0.5);
    }

    img {
        border-radius: 20px;
        width: 300px;
        height: auto;
        object-fit: cover;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        transition: opacity 0.3s ease;

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
        padding: 5px;
        word-break: break-word;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        }

        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
    }
`;
