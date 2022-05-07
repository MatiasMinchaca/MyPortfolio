import styled from 'styled-components';

export const ButtonScroll = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    transition: all 0.8s;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background: #c99c0ad1;
    opacity: 0;
    z-index: 100;
    :active{
        transform: scale(0.8);
    }
    svg{
        fill: darkred;
        transition: all 0.5s;
    }
    :hover{
        svg{
            transform: scale(1.2);
        }
    }
    @media screen and (min-width: 768px){
        cursor: pointer;
    }
`;