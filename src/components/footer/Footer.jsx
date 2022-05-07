import React from 'react';
import { 
    FooterSection, 
    SvgFooter } from './Footer elements'


const Footer = () => {
    return (
        <FooterSection >
                <SvgFooter viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="rgba(230,25,25,0.7)" />
                    <use href="#gentle-wave" x="48" y="3" fill="rgba(225,30,30,0.5)" />
                    <use href="#gentle-wave" x="48" y="5" fill="#d1ad3654" />
                    <use href="#gentle-wave" x="48" y="7" fill="rgba(184,20,20,0.4)" />
                </g>
                </SvgFooter>
        </FooterSection>
    );
};

export default Footer;