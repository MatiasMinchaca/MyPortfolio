import styled from 'styled-components';

export const FirstSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: black;
    font-weight: bold;
    margin: 20px 0;
    position: relative;
    .myPhoto{
        width: 230px;
        height: 230px;
        filter: drop-shadow(0 0 6px black);
    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #8b0000d6;
    color: white;
    padding: 15px;
    text-shadow: 0 3px 6px #000000;
    box-shadow: 0 0 6px #000000b5;
    border: 5px solid #c99c0a;
    letter-spacing: 1pt;
    max-width: 370px;
    transform: skew(-10deg);
    h1{
        font-size: 18px;
        margin-bottom: 5px;
        user-select: none;
        z-index: 22;
        transform: skew(10deg);
    }
    h2{
        font-size: 17px;
        margin-bottom: 5px;
        user-select: none;
        z-index: 22;
        transform: skew(10deg);
    }
    p{
        font-size: 13px;
        user-select: none;
        z-index: 22;
        display: flex;
        margin-bottom: 10px;
        text-align: center;
    }
    h3{
        margin-top: 5px;
        width: 90%;
        text-align: center;
        user-select: none;
        transform: skew(10deg);
    }
    .more{
        padding: 10px;
        border-radius: 15px;
        bottom: 35px;
        z-index: 68;
        background: #c99c0a;
        font-size: 15px;
        text-decoration: none;
        color: white;
        display: flex;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        transition: all 0.8s;
        margin-top: 20px;
        text-shadow: 0 0 4px black;
        letter-spacing: 1pt;
        transform: skew(10deg);
        :focus-visible{
            text-decoration: none;
        }
        :hover{
            animation: changeBorder 3s linear 0.5s infinite normal;
            background: #c99c0a;
            color: #ffffff;
            transform: scale(1.1);
        }
        @keyframes changeBorder {
            20% { border-radius: 5px 15px 15px 15px; }
            40% { border-radius: 15px 5px 15px 15px; }
            60% { border-radius: 15px 15px 5px 15px; }
            80% {border-radius: 15px 15px 15px 5px; }
            100% {border-radius: 15px 15px 15px 15px; }
        }
    }
    .selected{
        display: none;
    }
    @media screen and (min-width: 300px){
        h1{
            font-size: 19px;
        }
        h2{
            font-size: 18px;
        }
    }
    @media screen and (min-width: 360px){
        h1{
            font-size: 21px;
        }
        h2{
            font-size: 20px;
        }
    }
    @media screen and (min-width: 768px){
        .more{
            cursor: pointer;
        }
        h1{
            font-size: 30px;
        }
        h2{
            font-size: 29px;
        }
        p{
            font-size: 11px;
        }
    }
`;

export const Blob = styled.svg`
    width: 230px;
    height: 230px;
    fill: #c99c0a;
    filter: drop-shadow(0px 0px 2px black);
`;