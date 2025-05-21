import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`;

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 1200px;
    text-align: center;
    margin: 0 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        justify-content: space-around;
    }
`;

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 100%;
    text-align: center;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #ffffff;

        @media (min-width: 768px) {
            font-size: 3rem;
        }

        @media (min-width: 1024px) {
            font-size: 4rem;
        }
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        color: #ffffff;
        margin-top: 20px;
        margin-bottom: 20px;

        @media (min-width: 768px) {
            font-size: 1.2rem;
            margin-top: 30px;
        }
    }
`;

export const Poster = styled.div`
    //z-index: 2;
    display: flex;
    justify-content: center;

    img {
        width: 250px;
        border-radius: 20px;
        animation: ${scale} 0.5s linear;

        @media (min-width: 768px) {
            width: 400px;
            border-radius: 30px;
        }
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 20px;
        margin-top: 30px;
    }
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #333;
    margin: 10px 0;
    line-height: 1.6;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.4rem;
    }
`;

export const PeopleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
    padding: 0 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
`;
