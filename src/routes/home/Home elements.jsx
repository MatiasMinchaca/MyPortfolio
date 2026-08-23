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
    width: min(1180px, calc(100% - 32px));
    height: fit-content;
    z-index: 10;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    padding-top: 42px;
    margin-bottom: 80px;
    gap: 22px;
    .titleProyects {
        width: 100%;
        flex: 0 0 100%;
        text-align: center;
        color: #210202;
        font-size: clamp(28px, 4vw, 42px);
        line-height: 1;
        margin-bottom: 8px;
    }
    .sectionIntro {
        width: min(760px, 100%);
        flex: 0 0 100%;
        margin: 0 auto 18px;
        text-align: center;
        color: #4b1c1c;
        font-size: 17px;
        line-height: 1.45;
        font-weight: 700;
    }
`;

export const ExperienceSection = styled(ProyectsSection)`
    margin-bottom: 72px;
`;

export const ServicesSection = styled(ProyectsSection)`
    margin-bottom: 72px;
    align-items: stretch;
`;

export const ServiceCard = styled.article`
    width: 100%;
    max-width: 260px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 22px;
    border-radius: 22px;
    background: #f7f2f2e8;
    border: 1px solid #8b000030;
    border-top: 5px solid #8b0000;
    box-shadow: 0 14px 35px #4b000014;
    color: #250404;
    h2 {
        color: #8b0000;
        font-size: 20px;
        line-height: 1.15;
    }
    p {
        margin-top: 12px;
        line-height: 1.45;
        font-weight: 600;
    }
`;

export const TechStackSection = styled(ProyectsSection)`
    margin-bottom: 72px;
    align-items: stretch;
    padding-top: 64px;
    gap: 22px;
`;

export const TechCategoryCard = styled.article`
    width: 100%;
    max-width: 300px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    padding: 22px;
    border-radius: 22px;
    background: linear-gradient(145deg, #8b0000, #4d0303);
    box-shadow: 0 14px 35px #4b000024;
    justify-content: flex-start;
    h2 {
        color: #f3c84e;
        font-size: 20px;
        line-height: 1.15;
        text-shadow: 0 2px 5px #0000008a;
        min-height: 46px;
        display: flex;
        align-items: center;
    }
    div {
        margin-top: 18px;
        align-content: flex-start;
    }
    span {
        font-size: 14px;
        padding: 8px 12px;
    }

    @media screen and (max-width: 720px) {
        max-width: 100%;
        min-height: auto;
    }
`;

export const ExperienceCard = styled.article`
    position: relative;
    width: 100%;
    max-width: 360px;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    padding: 22px;
    border: 1px solid #8b000033;
    border-radius: 22px;
    margin: 5px 0;
    color: black;
    font-size: 16px;
    font-weight: 600;
    background: #f7f2f2e8;
    box-shadow: 0 18px 45px #4b000017;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    overflow: hidden;
    :hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 55px #4b000024;
    }
    :first-of-type {
        max-width: 100%;
        min-height: auto;
        color: #250404;
        background: linear-gradient(90deg, #fff8f8, #f8eeee);
        border: 1px solid #8b00004a;
        border-left: 8px solid #8b0000;
        text-shadow: none;
    }
    :first-of-type p,
    :first-of-type li,
    :first-of-type h3 {
        color: #250404;
    }
    :first-of-type span,
    :first-of-type h2 {
        color: #8b0000;
    }
    :first-of-type ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 8px 24px;
        padding-left: 0;
    }
    :first-of-type li {
        list-style: none;
        padding-left: 18px;
        position: relative;
    }
    :first-of-type li::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #c99c0a;
        position: absolute;
        left: 0;
        top: 9px;
    }
    span {
        color: #8b0000;
        font-size: 14px;
        margin-bottom: 8px;
    }
    h2 {
        color: #8b0000;
        font-size: 25px;
        line-height: 1.1;
    }
    h3 {
        margin-top: 5px;
        font-size: 18px;
        line-height: 1.25;
    }
    p {
        text-align: left;
        margin-top: 12px;
        line-height: 1.5;
    }
    ul {
        margin-top: 12px;
        padding-left: 18px;
    }
    li {
        list-style: disc;
        margin-top: 8px;
        font-size: 15px;
        line-height: 1.45;
    }

    @media screen and (max-width: 640px) {
        padding: 18px;
        font-size: 15px;
        :first-of-type {
            border-left-width: 5px;
        }
        :first-of-type ul {
            grid-template-columns: 1fr;
        }
        h2 {
            font-size: 22px;
        }
    }
`;

export const SelectedProjectCard = styled.article`
    position: relative;
    width: 100%;
    max-width: 560px;
    height: 390px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 22px;
    margin: 5px 0;
    color: white;
    font-weight: bold;
    background: linear-gradient(145deg, #8b0000, #4d0303);
    box-shadow: 0 18px 45px #4b000026;
    text-shadow: 0 2px 5px #0000008a;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    :hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 55px #4b000036;
    }
    ::after {
        content: "";
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: #c99c0a2e;
        position: absolute;
        right: -54px;
        top: -62px;
    }
    h2 {
        color: #f3c84e;
        position: relative;
        z-index: 1;
    }
    h3 {
        margin-top: 5px;
        position: relative;
        z-index: 1;
        min-height: 28px;
    }
    dl {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 14px;
        position: relative;
        z-index: 1;
        flex: 1;
    }
    dt {
        color: #f3c84e;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 2px;
    }
    dd {
        margin: 0;
        line-height: 1.35;
        font-size: 15px;
    }

    @media screen and (max-width: 640px) {
        height: auto;
        min-height: 320px;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
    padding-top: 18px;
`;

export const ProjectTag = styled.span`
    padding: 6px 10px;
    border-radius: 999px;
    background: #c99c0a;
    color: white;
    font-size: 13px;
    text-shadow: none;
    position: relative;
    z-index: 1;
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
