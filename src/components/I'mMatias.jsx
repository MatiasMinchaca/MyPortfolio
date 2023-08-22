import React from 'react';
import {
    FirstSection,
    Blob,
    Blob2,
    ContainerText
} from "./I'mMatias elements";
import {
    NavLink
} from "react-router-dom";

const ImMatias = () => {
    return (
        <FirstSection>
            <Blob viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </mask>
                <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    <image className='myPhoto' x='0' href="/images/myPhoto.png" />
                </g>
            </Blob>
            <ContainerText>
                <Blob2 id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="#8b0000" offset="0%"></stop>
                            <stop id="stop2" stop-color="#8b0000" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient)"
                        d="M18.5,-31.8C24.2,-28.8,29.1,-24.2,32.9,-18.6C36.7,-13.1,39.5,-6.5,38.8,-0.4C38.1,5.7,33.9,11.5,29.7,16.3C25.4,21.1,21.1,25.1,16.1,29.5C11.2,33.9,5.6,38.8,-0.3,39.3C-6.2,39.8,-12.4,36,-17.6,31.7C-22.8,27.4,-27.1,22.8,-31.8,17.4C-36.6,12.1,-41.9,6,-42.4,-0.3C-42.9,-6.6,-38.5,-13.1,-34.3,-19.5C-30.1,-25.9,-26.2,-32.2,-20.5,-35.1C-14.8,-38.1,-7.4,-37.9,-0.5,-37C6.4,-36.2,12.8,-34.8,18.5,-31.8Z"
                        width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                        stroke="url(#sw-gradient)"></path>
                </Blob2>
                <h1>
                    Matías Minchaca
                </h1>
                <h2>
                    Web Developer
                </h2>
                <h3>
                    Edad: 20 años
                    <br />
                    Residencia: Bs As, Argentina
                    <br />
                    Nacionalidad: Argentino
                </h3>
                <NavLink to='/aboutMe' className={({ isActive }) => ` more ${isActive ? 'selected' : ''}`} >
                    Leer más.
                </NavLink>
            </ContainerText>
        </FirstSection>
    );
};

export default ImMatias;