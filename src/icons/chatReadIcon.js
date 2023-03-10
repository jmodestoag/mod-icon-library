import React from 'react';

const chatReadIcon = ({ color = "#8f8787", size = 32 }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.34 20L13.8 16.46L15.21 15.05L17.33 17.17L21.57 12.93L23 14.34L17.34 20ZM12 17C11.9994 15.819 12.2979 14.6571 12.8676 13.6225C13.4373 12.588 14.2596 11.7145 15.2579 11.0836C16.2563 10.4526 17.3981 10.0847 18.577 10.0141C19.7559 9.94357 20.9335 10.1726 22 10.68V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V22L6 18H12C12 17.83 12.01 17.67 12.03 17.5C12.0097 17.3341 11.9997 17.1671 12 17Z" 
            fill={color} />
        </svg>

    )
};

export default chatReadIcon;