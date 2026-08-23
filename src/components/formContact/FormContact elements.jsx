import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 16px 110px;
    scroll-margin-top: 70px;
`;

export const ContactCard = styled.article`
    width: min(900px, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 24px;
    border-radius: 24px;
    background: linear-gradient(135deg, #8b0000, #4d0303);
    color: white;
    text-align: center;
    box-shadow: 0 18px 45px #4b000026;
    text-shadow: 0 2px 5px #0000008a;
    span {
        color: #f3c84e;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 13px;
    }
    h2 {
        margin-top: 8px;
        color: #f3c84e;
        font-size: clamp(28px, 4vw, 42px);
    }
    p {
        width: min(620px, 100%);
        margin-top: 12px;
        line-height: 1.45;
        font-weight: bold;
    }
`;

export const ContactLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 22px;
`;

export const ContactLink = styled.a`
    padding: 10px 16px;
    border-radius: 999px;
    background: #c99c0a;
    color: white;
    text-decoration: none;
    font-weight: bold;
    text-shadow: none;
    transition: transform 0.25s ease, background 0.25s ease;
    :hover {
        transform: translateY(-2px);
        background: #d7aa17;
    }
`;
