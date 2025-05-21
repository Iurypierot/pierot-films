import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 80px;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => (props.changeBackground ? '#000' : 'transparent')};
    transition: background-color 0.5s ease-in-out;

    img {
        
        width: 365px;

        @media (max-width: 768px) {
            width: 120px;
        }
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        position: absolute;
        top: 80px;
        right: 0;
        background-color: #000;
        width: 100%;
        height: 0;
        overflow: hidden;
        gap: 20px;
        text-align: center;
        transition: height 0.3s ease-in-out;

        ${(props) => props.isOpen && `
            height: 250px;
            padding: 20px 0;
        `}
    }
`

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 25px;
    position: relative;

    a {
        text-decoration: none;
        color: #ffffff;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${(props) => (props.isActive ? '100%' : 0)};
        background-color: #189b20;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`

export const MobileMenuButton = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
        z-index: 100;
    }

    div {
        width: 30px;
        height: 3px;
        background-color: #fff;
        margin: 6px 0;
        transition: transform 0.3s ease-in-out;
    }
`
