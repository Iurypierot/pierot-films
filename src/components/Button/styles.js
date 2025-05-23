import styled, { css } from 'styled-components';

const buttonBase = css`
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 6px 12px;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonBase}
`;

export const ButtonRed = styled.button`
  ${buttonBase}
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0 0 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    background: #ff0000;
    color: #ffffff;
    box-shadow: 0 0 7px 15px rgb(255 0 0 / 30%);
  }

  @media (max-width: 768px) {
    box-shadow: 0 0 5px 6px rgb(255 0 0 / 30%);
  }

  @media (max-width: 480px) {
    box-shadow: 0 0 4px 5px rgb(255 0 0 / 30%);
  }
`;
