import React from 'react';

const TrelloIcon = ({fill, width, height}) => {
    return (
        <svg width={width} height={height} fill="transparent" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke={fill} />
            <path d="M10.4 6H6.6C6.26863 6 6 6.26863 6 6.6L6 17.4C6 17.7314 6.26863 18 6.6 18H10.4C10.7314 18 11 17.7314 11 17.4V6.6C11 6.26863 10.7314 6 10.4 6Z" stroke={fill} />
            <path d="M17.4 6H13.6C13.2686 6 13 6.26863 13 6.6V13.4C13 13.7314 13.2686 14 13.6 14H17.4C17.7314 14 18 13.7314 18 13.4V6.6C18 6.26863 17.7314 6 17.4 6Z" stroke={fill} />
        </svg>
    );
};

export default TrelloIcon;