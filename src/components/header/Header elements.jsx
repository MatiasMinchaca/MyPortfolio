import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    @media screen and (min-width: 768px){
        padding-right: 40px;
    }
`;

export const MenuBurguer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 30px;
        cursor: pointer;
        fill: darkred;
    }
    @media screen and (min-width: 768px){
        display: none;
    }
`;

export const MenuD = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    width: ${({deploy}) => deploy ? '100%' : '0'};
    height: ${({deploy}) => deploy ? "50%" : '0'};
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-bottom-left-radius: 20%;
    opacity: ${({deploy}) => deploy ? '1' : '0'};
    box-shadow: ${({deploy}) => deploy ? '2px 1px 3px #00000061' : '0 0 0 #00000061'};
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: white;
    @media screen and (min-width: 768px){
        position: relative;
        top: 0;
        box-shadow: none;
        background: none;
        height: 100%;
        flex-direction: row;
        height: 100%;
        width: 70%;
        opacity: 1;
        transition: none;
        justify-content: space-between;
        border-bottom-left-radius: 0%;
    }
`;

export const MenuClose = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: ${({deploy}) => deploy ? '100%' : '0'};
    height: ${({deploy}) => deploy ? '100%' : '0'};
    z-index: 49;
    @media screen and (min-width: 768px){
        display: none;
    }
`;

export const Options = styled.li`
    width: 100%;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    :hover{
        background: darkred;
    }
    a{
        text-decoration: none;
        color: black;
        font-weight: bold;
        width: 100%;
        text-align: right; 
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
        padding-right: 20px;
        :hover{
            color: white
        }
    }
    @media screen and (min-width: 768px){
        height: 100%;
        justify-content: center;
        a{
            height: 100%;
            justify-content: center;
            padding-right: 0px;
            padding-bottom: 1px;
            :hover{
                color: white
            }
        }
    }
`;

export const LogoContainer = styled.h2`
    font-family: 'MonteCarlo', cursive;
    animation: changeColor 8s linear 0.8s infinite normal forwards running;
    user-select: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1px;
    @keyframes changeColor {
        0% { color: #cd0505 }
        50% { color: darkred; }
        100% { color: #c1142e; }
    }
    @media screen and (min-width: 768px){
        font-size: 30px; 
    }
`;

export const LineS = styled.hr`
    position: absolute;
    top: 60px;
    height: 0.006rem;
    width: 100%;
    left: 0;
    z-index: 60;
    background: darkred;
    border: none;

`;
