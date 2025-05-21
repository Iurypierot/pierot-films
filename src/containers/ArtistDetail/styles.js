import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f4f4f4;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin: 20px 0;
`;

export const Image = styled.img`
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #666;
    text-align: justify;
    margin-bottom: 20px;
    padding: 0 20px;
`;

