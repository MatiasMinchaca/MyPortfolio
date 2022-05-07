import React from 'react';
import { ButtonScroll } from './ButtonScrollTop elements';

import ArrowTopIcon from '../icons/ArrowTopIcon';

const ButtonScrollTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    } 

    return (
        <ButtonScroll id='buttonScrollTop' onClick={scrollToTop}>
            <ArrowTopIcon width='30' height='30' />
        </ButtonScroll>
    );
};

export default ButtonScrollTop;