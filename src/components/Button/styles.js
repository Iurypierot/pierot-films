import styled, { css } from 'styled-components'

const buttonStyles = css`
    border: 3px solid #ffffff;
    background: transparent;
    color: #ffffff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

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
`

export const ButtonWhite = styled.button`
    ${buttonStyles}
`

export const ButtonRed = styled.button`
    ${buttonStyles}

    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background: #ff0000;
        color: #ffffff;
    }

    @media (max-width: 768px) {
        box-shadow: 0px 0px 5px 6px rgb(255 0 0 / 30%);
    }

    @media (max-width: 480px) {
        box-shadow: 0px 0px 4px 5px rgb(255 0 0 / 30%);
    }
`
