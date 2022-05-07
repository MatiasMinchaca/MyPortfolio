import React from 'react';

const StatsIcon = ({fill, width, height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M16 16L16 8" stroke="currentColor"/>
            <path d="M12 16L12 11" stroke="currentColor"/>
            <path d="M8 16L8 13" stroke="currentColor"/>
            <path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
    );
};

export default StatsIcon;