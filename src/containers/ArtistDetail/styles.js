import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;          /* Ocupa toda a altura da tela */
`;

export const Title = styled.h1`
  font-size: 2.5rem;           /* Um pouco maior para dar impacto */
  color: #222;
  text-align: center;
  margin: 20px 0;
  font-weight: 700;
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;         /* Levemente maior */
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra suave */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);    /* Pequena animação no hover */
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 800px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #444;
  text-align: justify;
  margin-bottom: 20px;
  line-height: 1.6;
  padding: 0 10px;

  @media (max-width: 600px) {
    font-size: 1rem;  /* Ajusta para telas menores */
    padding: 0 5px;
  }
`;
