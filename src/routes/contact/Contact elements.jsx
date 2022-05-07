import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    padding: 30px 10px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.article`
    width: 300px;
    background: #c99c0ad1;
    border-radius: 20px;
    position: relative;
    margin-top: 100px;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 55px;
    gap: 15px;
    padding-bottom: 30px;
    border: 3px solid darkred;
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        position: absolute;
        border: 5px solid #f2f2f2;
        top: -100px;
        transition: transform 2s cubic-bezier(0,0,.5,2);
    }
    svg{
        position: absolute;
        border-radius: 50%;
        border: 3px solid #f2f2f2;
        width: 30px;
        height: 30px;
        top: -110px;
        fill: #ffffff;
        filter: drop-shadow(0 4px 6px black);
        z-index: 9;    
    }
    h2{
        color: white;
        text-shadow: 0 3px 6px #000000;
        font-size: 28px;
    }
    a{
        color: white;
        text-shadow: 0 3px 6px #000000;
        font-weight: bold;
        font-size: 16px;
        transition: transform 1s cubic-bezier(0,0,.5,2);
        :hover{
            transform: scale(1.1);
        }
    }
    :hover{
        img{
            transform: rotate3d(1, 1, 1, 360deg);
            transition: transform 2s cubic-bezier(0,0,.5,2);, width 2s cubic-bezier(0, 0, .5, 2);
        }
    }
`;