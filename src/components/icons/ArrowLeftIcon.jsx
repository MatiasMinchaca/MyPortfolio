import React from 'react';

const ArrowLeftIcon = ({fill, width, height}) => {
    return (
        <svg className='ChevronLeft' xmlns="http://www.w3.org/2000/svg"  width={width} height={height} fill={fill} viewBox="0 0 24 24">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
        </svg>
    );
};

export default ArrowLeftIcon;