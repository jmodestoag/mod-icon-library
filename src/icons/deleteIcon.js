import React from 'react';

const deleteIcon = ({ color = "#8f8787", size = 32 }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.11111 19.7778C5.11111 21 6.11111 22 7.33333 22H16.2222C17.4444 22 18.4444 21 18.4444 19.7778V6.44444H5.11111V19.7778ZM19.5556 3.11111H15.6667L14.5556 2H9L7.88889 3.11111H4V5.33333H19.5556V3.11111Z"
                fill={color} />
        </svg>
    )
};

export default deleteIcon;