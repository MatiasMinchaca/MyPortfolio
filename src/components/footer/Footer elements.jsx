import styled from 'styled-components';

export const FooterSection = styled.div`
    text-align:center;
    color:white;
    bottom: 0;
    width: 100%;
    left: 0;
    .content {
        position:relative;
        height:20vh;
        text-align:center;
        background-color: white;
    }
    .parallax > use {
        animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
    }
    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 20s;
    }
    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 5s;
    }
    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 30s;
    }
    @keyframes move-forever {
        0% {
        transform: translate3d(-90px,0,0);
        }
        100% { 
        transform: translate3d(85px,0,0);
        }
    }
`;

export const SvgFooter = styled.svg`
    position:relative;
    width: 100%;
    height: 25vh;
    margin-bottom:-7px;
    min-height:100px;
    max-height:150px;
`;

export const InnerFooter = styled.div`
    height:10vh;
    width:100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;