import React from 'react';

const chatUnreadIcon = ({ color = "#8f8787", size = 32 }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 6.98V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H14.1C13.9521 2.72649 13.9675 3.47679 14.1452 4.19659C14.3228 4.91639 14.6583 5.5877 15.1272 6.16194C15.5962 6.73618 16.1869 7.19899 16.8567 7.51688C17.5265 7.83477 18.2586 7.99979 19 8C20.13 8 21.16 7.61 22 6.98ZM16 3C16 4.66 17.34 6 19 6C20.66 6 22 4.66 22 3C22 1.34 20.66 0 19 0C17.34 0 16 1.34 16 3Z"
                fill={color} />
        </svg>
    )
};

export default chatUnreadIcon;