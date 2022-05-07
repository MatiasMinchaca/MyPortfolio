import styled from'styled-components';

export const ContainerLoading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    font-size: 40px;
    font-weight: bold;
    svg{
        fill: #c99c0ad1;
        animation: rotation 1s infinite ;
        width: 50px;
        height: 50px;
        @keyframes rotation {
            25% { transform: rotate(45deg) }
            50% { transform: rotate(90deg) }
            75% { transform: rotate(135deg) }
            100% { transform: rotate(180deg) }
        }
    }

`;