import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;
    flex-wrap: wrap; /* Isso vai permitir que os elementos dentro do Container quebrem para a linha seguinte em telas menores */

    span {
        padding: 8px 18px;
        border: 2px solid #ffffff;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        background-color: #0f0f0f;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

        /* Responsividade */
        @media (max-width: 768px) {
            font-size: 10px;  /* Reduz o tamanho da fonte em telas menores */
            padding: 6px 12px; /* Ajusta o padding para telas menores */
        }
    }
`;
