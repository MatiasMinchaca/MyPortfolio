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
    overflow: hidden;
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
    color: white;
    position: relative;
    text-shadow: 0 3px 6px #220101;
    letter-spacing: 1pt;
    overflow: hidden;
    height: 323px;
    width: 334px;
    h1{
        font-size: 18px;
        margin-bottom: 5px;
        user-select: none;
        z-index: 22;
    }
    h2{
        font-size: 17px;
        margin-bottom: 5px;
        user-select: none;
        z-index: 22;
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
        z-index: 22;
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
            font-size: 22px;
        }
        h2{
            font-size: 21px;
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

export const Blob2 = styled.svg`
    width: 400px;
    height: 400px;
    fill: #c99c0a;
    filter: drop-shadow(0px 0px 2px black);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-48%) translateY(-50%);
`;