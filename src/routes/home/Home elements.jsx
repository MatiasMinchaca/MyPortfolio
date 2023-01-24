import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FirstSection = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: bold;
    h1 {
        font-size: 18px;
        margin-bottom: 5px;
        user-select: none;
    }
    h2 {
        font-size: 17px;
        margin-bottom: 5px;
        user-select: none;
    }
    p {
        font-size: 14px;
        margin-bottom: 10px;
        user-select: none;
    }
    @media screen and (min-width: 300px) {
        h1 {
            font-size: 19px;
        }
        h2 {
            font-size: 18px;
        }
        p {
            font-size: 15px;
        }
    }
    @media screen and (min-width: 360px) {
        h1 {
            font-size: 21px;
        }
        h2 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
    @media screen and (min-width: 768px) {
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 29px;
        }
    }
    .more {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 52%;
        bottom: 100px;
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
        text-shadow: 0 0 4px black;
        :focus-visible {
            text-decoration: none;
        }
        :hover {
            animation: changeBorder 3s linear 0.5s infinite normal;
        }
        @keyframes changeBorder {
            20% {
                border-radius: 20% 52% 52% 52%;
            }
            40% {
                border-radius: 52% 20% 52% 52%;
            }
            60% {
                border-radius: 52% 52% 20% 52%;
            }
            80% {
                border-radius: 52% 52% 52% 20%;
            }
            100% {
                border-radius: 52% 52% 52% 52%;
            }
        }
    }
    .selected {
        display: none;
    }
`;

export const TechnologiesSection = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 70px;
    margin-bottom: 70px;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    .react-animate {
        animation: rotation 4s linear 0.5s infinite normal;
    }
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .moreTec {
        position: absolute;
        padding: 10px;
        border-radius: 15px;
        bottom: -50px;
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
        user-select: none;
        cursor: pointer;
        z-index: 400;
        :hover {
            animation: changeBorder 3s linear 0.5s infinite normal;
            background: #c99c0a;
            color: #ffffff;
            transform: scale(1.1) !important;
        }
        @keyframes changeBorder {
            20% {
                border-radius: 5px 15px 15px 15px;
            }
            40% {
                border-radius: 15px 5px 15px 15px;
            }
            60% {
                border-radius: 15px 15px 5px 15px;
            }
            80% {
                border-radius: 15px 15px 15px 5px;
            }
            100% {
                border-radius: 15px 15px 15px 15px;
            }
        }
    }
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    max-width: 332px;
    /* background: #c99c0a; */
    background: #c99c0ad1;
    margin: 20px;
    border-radius: 10px;
    height: 305px;
    position: relative;
    color: white;
    text-shadow: 0 0 4px black;
    svg {
        width: 70px;
        height: 50px;
    }
    h2 {
        color: darkred;
        text-shadow: none;
    }
    p {
        text-align: center;
        margin: 10px;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        color: #f2f2f2;
        font-weight: bold;
        text-shadow: 0 3px 6px #000000bf;
        transition: all 0.3s;
        padding: 5px 10px;
        background: #8b0000c4;
        border-radius: 3px;
        :active{
            transform: scale(0.8);
        }
    }
`;

export const TittleTec = styled.h1`
    position: absolute;
    top: 0;
    text-align: center;
`;

export const TextCard = styled.p`
    display: none;
`;

export const Square1 = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    background: #c99c0a96;
    top: -15px;
    left: -15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    ::before {
        content: "";
        width: 30px;
        height: 30px;
        background: #c99c0a96;
        border-radius: 5px;
    }
`;

export const Square2 = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    position: absolute;
    background: #c99c0a96;
    right: -10px;
    bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    ::before {
        content: "";
        width: 30px;
        height: 30px;
        background: #c99c0a96;
        border-radius: 5px;
    }
`;

export const ProyectsSection = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    z-index: 10;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    padding-top: 70px;
    margin-bottom: 70px;
    gap: 30px;
    .titleProyects {
        position: absolute;
        top: 0;
        text-align: center;
    }
`;

export const CardProyects = styled.article`
    position: relative;
    clear: both;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 5px 0;
    color: black;
    font-weight: bold;
    background: #f2f2f2;
    h2 {
    }
    h3 {
        margin-top: 5px;
    }
    p {
        text-align: justify;
        margin-top: 10px;
    }
    a {
        color: black;
        text-decoration: none;
        position: relative;
        padding: 10px;
        display: flex;
        align-items: center;
        transition: transform .25s .25s cubic-bezier(0,0,.5,2);
        z-index: 1;
        cursor: default;
        :hover{
            color: white;
        }
        :before{
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%) translateX(calc(100% + 130px));
            width: 30px;
            height: 30px;
            background: darkred;
            border-radius: 50px;
            transition: transform .25s .25s cubic-bezier(0, 0, .5, 2);
            z-index: -1;
        }
        :hover:before{
            width: 100%;
            transform: translateY(-50%) translateX(-10px);
            transition: transform .25s cubic-bezier(0, 0, .5, 2), width .25s .25s cubic-bezier(0, 0, .5, 2);
        }
        svg{
            fill: white;
            width: 25px;
            height: 25px;
            display: flex;
            margin-left: 6px;
            transition: transform .25s .25s cubic-bezier(0,0,.5,2);
            align-items: center;
        }
        :hover svg{
            transform: translateX(3px);
        }
        @media screen and (min-width: 768px) {
            cursor: pointer;
        }
    }
`;

export const SliderImages = styled.section`
    width: 100%;
    position: relative;
    height: 150px;
    font-size: 25px;
    margin: 10px 0;
    img {
        width: 100%;
        height: 150px;
        z-index: 40;
    }
    .ChevronLeft {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        fill: white;
        transition: all 0.5s;
        z-index: 41;
        filter: drop-shadow(0 0 6px black);
        cursor: pointer;
        :active {
            font-size: 22px;
            background: #c99c0a54;
        }
    }
    .ChevronRight {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        fill: white;
        transition: all 0.5s;
        z-index: 41;
        filter: drop-shadow(0 0 6px black);
        cursor: pointer;
        :active {
            font-size: 22px;
            background: #c99c0a54;
        }
    }
    .slide {
        opacity: 0;
        transform: scale(0.8);
        transition: ease 0.5s;
    }
    .activeImage {
        opacity: 1;
        transition: ease 0.5s;
        transform: scale(1);
    }
`;

export const ContainerTechProyects = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
    article {
        text-align: center;
        svg {
            font-size: 25px;
        }
    }
`;
