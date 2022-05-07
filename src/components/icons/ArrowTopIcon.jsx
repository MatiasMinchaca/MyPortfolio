import React from 'react';

const ArrowTopIcon = ({fill, width, height}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 24 24">
            <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
        </svg>
    );
};

export default ArrowTopIcon;