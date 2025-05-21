import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    color: #777;
    margin-bottom: 30px;
`;

export const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
`;

export const MovieCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 250px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const MoviePoster = styled.img`
    width: 100%;
    border-radius: 8px 8px 0 0;
`;

export const MovieTitle = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 10px;
    color: #333;
    padding: 10px;
    text-align: center;
`;
