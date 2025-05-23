import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Background = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  min-height: 100vh; /* Permite expansão em telas pequenas */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    z-index: 1;
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
  z-index: 2;

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
  max-width: 600px;
  text-align: center;
  margin: 0 auto;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #ffffff;

    @media (min-width: 480px) {
      font-size: 2.5rem;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
      text-align: left;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 0.95rem;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (min-width: 480px) {
      font-size: 1rem;
    }

    @media (min-width: 768px) {
      font-size: 1.2rem;
      margin-top: 30px;
    }
  }
`;

export const Poster = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;

  img {
    width: 100%;
    max-width: 250px;
    height: auto; /* Mantém proporção */
    border-radius: 20px;
    animation: ${scale} 0.5s linear;

    @media (min-width: 480px) {
      max-width: 250px;
    }

    @media (min-width: 768px) {
      max-width: 400px;
      border-radius: 30px;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  width: 100%;

  button {
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:focus {
      outline: 2px solid #f00; /* Foco acessível */
      outline-offset: 2px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-top: 30px;

    button {
      width: auto;
    }

    button:first-child {
      flex-grow: 1; /* Destaca o primeiro botão */
    }
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
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
