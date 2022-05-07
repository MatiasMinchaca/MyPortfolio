import styled from "styled-components";

export const ContainerAbout = styled.div`
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

export const BlobAbout = styled.svg`
    width: 230px;
    height: 230px;
    fill: #c99c0a;
    filter: drop-shadow(0px 0px 2px black);
`;

export const ContainerTextAbout = styled.div`
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
        text-align: center;
        width: 90%;
        user-select: none;
        transform: skew(10deg);
    }
    .back{
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
    @media screen and (min-width: 300px) {
        h1 {
            font-size: 19px;
        }
        h2 {
            font-size: 18px;
        }
    }
    @media screen and (min-width: 360px) {
        .more {
            bottom: 70px;
        }
        h1 {
            font-size: 21px;
        }
        h2 {
            font-size: 20px;
        }
    }
    @media screen and (min-width: 768px) {
        .more {
            bottom: 80px;
        }
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 29px;
        }
        p {
            font-size: 11px;
        }
    }
`;

export const FirstSectionAbout = styled.div`
    width: 100%;
    padding: 20px;
    position: relative;
    color: black;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #eeeeeec7;
    h2{
        font-size: 2rem;
    }
    p {
        letter-spacing: 1pt;
        font-size: 15px;
        text-align: center;
        text-align: center;
        @media screen and (min-width: 768px){
            width: 80%;
            font-size: 17px;
        }
    }
`;

export const PhotoOne = styled.img`
    display: none;
    position: absolute;
    width: 100px;
    top: -194px;
    left: 30px;
    filter: drop-shadow(0 3px 3px black);
`;

export const SecondSectionAbout = styled.div`
    margin-top: 10px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 20px;
    h2{
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const SkillCard = styled.article`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 14px;
        text-shadow: 0 3px 6px #ededed;
        letter-spacing: 1pt;
        font-weight: 400;
        font-family: "Sansita Swashed", cursive;
    }
`;

export const ThirdSectionAbout = styled.div`
    margin-top: 30px;
    width: 90%;
    min-height: 400px;
    background: #98bce3;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content; center;
    gap: 10px;
    margin-top: 60px;
    color: black;
    padding: 20px;
    max-width: 1200px;
    box-shadow: 0 -6px 45px #0000004d;
    p {
        font-size: 20px;
        text-align: left;
    }
    h1 {
        font-size: 70px;
        user-select: none;
        text-align: center;
    }
`;

export const TrianglesContainer = styled.div`
    position: absolute;
    left: 0;
    display: flex;
    top: -48px;
    overflow: hidden;
    width: 100%;
    svg {
        fill: #98bce3;
        width: 10%;
        height: 70px;
    }
`;

export const HistoryTitle = styled.h2`
    text-shadow: 0 3px 6px #eeeeeea1;
    letter-spacing: 1pt;
    font-size: 2rem;
    text-align: center;
`;

export const HistoryContainer = styled.div`
    width: 100%;
    color: width;
    h3{
        text-align: center;
        margin-bottom: 10px;
        text-shadow: 0 3px 6px #eeeeeea1;
        font-size: 1.3rem;
    }
    p {
        letter-spacing: 1pt;
        font-size: 18px;
        text-shadow: 0 1px 6px #eeeeeea1;
    }
`;
