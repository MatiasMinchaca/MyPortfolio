import React from 'react';

const CSSIcon = ({fill, width, height}) => {
    return (
        <svg width={width} height={height} fill="transparent" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke={fill}/>
            <path d="M7 7H16.5L15.5 17L12 18L8.5 17L8.25 14.5" stroke={fill}/>
            <path d="M16 11.5H7.5" stroke={fill}/>
        </svg>
    );
};

export default CSSIcon;