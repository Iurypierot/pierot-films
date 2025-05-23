import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9fafb; /* Fundo suave para melhor contraste */
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  color: #222831; /* Cor escura e suave */
  margin-bottom: 15px;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  color: #55595c; /* Cinza neutro */
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }
`;

export const MovieCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 250px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  outline-offset: 4px;

  &:hover,
  &:focus-visible {
    transform: translateY(-12px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
  aspect-ratio: 2/3; /* mantém proporção do poster */
  user-select: none;
`;

export const MovieTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 12px 10px;
  color: #222831;
  text-align: center;
  min-height: 3rem; /* Para manter cards alinhados */
`;

export const MovieDetails = styled.div`
  margin-top: 40px;
  padding: 30px;
  background-color: #e9ecef;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  h2 {
    font-size: 2.4rem;
    color: #222831;
    margin-bottom: 15px;
    font-weight: 700;
  }
`;

export const MovieOverview = styled.p`
  font-size: 1.25rem;
  color: #4b4f56;
  line-height: 1.7;
  margin-top: 15px;
  max-width: 800px;
`;
