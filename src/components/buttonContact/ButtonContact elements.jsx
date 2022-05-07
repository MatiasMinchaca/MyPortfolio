import styled from 'styled-components';

export const OpenClose = styled.button`
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 28px;
    box-shadow: 0 0 2px rgb(0 0 0 / 60%);
    z-index: 300;
    :active{
        transform: scale(0.8);
    }
    svg{
        fill: black;
    }
    @media screen and (min-width: 768px){
        display: none;
    }
`;

export const LateralButtons = styled.button`
    display: none;
    @media screen and (min-width: 768px){
        display: flex;
        position: fixed;
        bottom: 42%;
        transform: translateY(-2%);
        left: ${({show}) => show ? '70px' : '10px'};
        width: 50px;
        height: 50px;
        border-radius: 30%;
        justify-content: center;
        align-items: center;
        border: none;
        font-size: 28px;
        box-shadow: 0 0 2px rgb(0 0 0 / 60%);
        z-index: 300;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
        :active{
            transform: scale(0.8);
        }
        svg{
            fill: black;
            transition: all 0.6s ease-in-out;
            ${({show}) => show ? 'transform: rotate(180deg)' : ''};
        }
    }
`;

export const ButtonEmail = styled.a`
    position: fixed;
    bottom: ${({show}) => show ? '250px' : '-40%'};
    left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 25px;
    transition: all 0.6s ease-in-out;
    background-color: rgb(239,239,239);
    box-shadow: 0 0 2px rgb(0 0 0 / 60%);
    z-index: 200;
    svg{
        fill: #EA4335;
        filter: drop-shadow( 0 0 6px white);
    }
    :active{
        transform: scale(0.8);
    }
    @media screen and (min-width: 768px){
        bottom: 55%;
        transform: translateY(-50%);
        left: ${({show}) => show ? '10px' : '-40%'};
    }
`;

export const ButtonWpp = styled.a`
    position: fixed;
    bottom: ${({show}) => show ? '190px' : '-40%'};
    left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #25D366;
    border: none;
    font-size: 25px;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 2px rgb(0 0 0 / 60%);
    z-index: 200;
    font-weight: bold;
    svg{
        fill: white;
        filter: drop-shadow( 0 0 6px black);
    }
    :active{
        transform: scale(0.8);
    }
    @media screen and (min-width: 768px){
        bottom: 45%;
        transform: translateY(-30%);
        left: ${({show}) => show ? '10px' : '-40%'};
    }
`;

export const ButtonLink = styled.a`
    position: fixed;
    bottom: ${({show}) => show ? '130px' : '-40%'};
    left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 25px;
    background: #0E76A8;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 2px rgb(0 0 0 / 60%);
    z-index: 200;
    svg{
        fill: white;
        filter: drop-shadow( 0 0 6px black)
    }
    :active{
        transform: scale(0.8);
    }
    @media screen and (min-width: 768px){
        bottom: 35%;
        transform: translateY(-20%);
        left: ${({show}) => show ? '10px' : '-40%'};
    }
`;

export const ButtonGitHub = styled.a`
    position: fixed;
    bottom: ${({show}) => show ? '70px' : '-40%'};
    left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 25px;
    background: #211F1F;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 2px rgb(0 0 0 / 60%);
    z-index: 200;
    svg{
        fill: white;
        filter: drop-shadow( 0 0 2px white)
    }
    :active{
        transform: scale(0.8);
    }
    @media screen and (min-width: 768px){
        bottom: 25%;
        transform: translateY(-10%);
        left: ${({show}) => show ? '10px' : '-40%'};
    }
`;

