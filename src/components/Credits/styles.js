import styled from 'styled-components';

export const Title = styled.h4`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    padding: 10px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    p {
        color: #ffffff;
        margin-top: 10px;
        font-size: 16px;

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }

    img {
        height: 200px;
        width: 140px;
        border-radius: 12px;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            height: 160px;
            width: 110px;
        }

        @media (max-width: 480px) {
            height: 140px;
            width: 100px;
        }
    }
`;
