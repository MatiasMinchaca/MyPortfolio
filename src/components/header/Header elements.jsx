import styled from 'styled-components';

export const AbstractGoldRed = styled.img`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 100%;
`;

export const Container = styled.header`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    z-index: 100;
    background: #f2f2f2;
    position: fixed;
    top: 0;
    .press{
        .line:nth-child(1){
            transform: translateY(8px) rotate(45deg);
        }
        .line:nth-child(2){
            opacity: 0;
        }
        .line:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

export const MenuBurguer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    svg{
        font-size: 30px;
        cursor: pointer;
        fill: darkred;
    }
    .line{
        display: block;
        width: 30px;
        height: 4px;
        background: darkred;
        margin-block: 2px;
        border-radius: 8px;
        transition: transform .5s,
        opacity .25s;
    }
    @media screen and (min-width: 830px){
        display: none;
    }
`;

export const MenuD = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: ${({deploy}) => deploy ? '180px' : '0'};
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-bottom-left-radius: 20%;
    opacity: ${({deploy}) => deploy ? '1' : '0'};
    box-shadow: ${({deploy}) => deploy ? '2px 1px 3px #00000061' : '0 0 0 #00000061'};
    z-index: 1001;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: #f2f2f2;
    @media screen and (min-width: 830px){
        position: relative;
        top: 0;
        box-shadow: none;
        background: none;
        height: 100%;
        flex-direction: row;
        height: 100%;
        width: 50%;
        opacity: 1;
        transition: none;
        justify-content: space-between;
        border-bottom-left-radius: 0%;
    }
`;

export const MenuClose = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: ${({deploy}) => deploy ? '100%' : '0'};
    height: ${({deploy}) => deploy ? '100%' : '0'};
    z-index: 49;
    @media screen and (min-width: 830px){
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
    @media screen and (min-width: 830px){
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

export const DownloadCV = styled.button`
    background: none;
    border: none;
    a{
        padding: 10px;
        text-decoration: none;
        background: #c99c0a;
        color: #ffffff;
        border-radius: 5px;
        text-shadow: 0 0 4px #000000bf;
        letter-spacing: 2pt;
    }
`;

export const LineS = styled.hr`
    position: absolute;
    top: 50px;
    height: 1px;
    width: 100%;
    left: 0;
    z-index: 60;
    background: #8b000052;
    border: none;
`;

export const Block = styled.div`
    width: 100%;
    height: 50px;
    background: none;
`;