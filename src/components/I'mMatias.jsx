import React, { useEffect } from 'react'
import {
    FirstSection,
    Blob,
    ContainerText
} from "./I'mMatias elements";
import {
    NavLink
} from "react-router-dom";
import 'aos/dist/aos.css';


const ImMatias = () => {
    let windowWidth = document.documentElement.scrollWidth;
    useEffect(() => {
        console.log(windowWidth)
    }, [windowWidth])
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
                    <br />
                    Lenguaje mas usado: JavaScript
                </h3>
                <NavLink to='/aboutMe' className={({ isActive }) => ` more ${isActive ? 'selected' : ''}`} title='About Me' >
                    Leer más.
                </NavLink>
            </ContainerText>
        </FirstSection>
    );
};

export default ImMatias;