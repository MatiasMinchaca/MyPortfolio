import React from 'react';

const HTMLIcon = ({fill, width, height}) => {
    return (
        <svg width={width} height={height} fill="transparent" viewBox="0 0 24 24">
            <path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke={fill}/>
            <path d="M17 7H7.5L8 11.5H16L15.5 17L12 18L8.5 17L8.25 14.5" stroke={fill}/>
        </svg>
    );
};

export default HTMLIcon;