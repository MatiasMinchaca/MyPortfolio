import styled from 'styled-components';

export const TechnologiesSection = styled.div`
    width: 96%;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 100px;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    .react-animate{
        animation: rotation 4s linear 0.5s infinite normal;
    }
    @keyframes rotation {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
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
    svg{
        width: 70px;
        height: 50px;
    }
    h2{
        color: darkred;
        text-shadow: none;
    }
    p{
        text-align: center;
        margin: 10px;
        font-weight: 700;
    }
    a{
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
    top: 20px;
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
    ::before{
        content: '';
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
    ::before{
        content: '';
        width: 30px;
        height: 30px;
        background: #c99c0a96;
        border-radius: 5px;
    }
`;