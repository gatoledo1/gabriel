import React from "react";

export const BlurObject = () => {
  return (
    <svg className="absolute opacity-40 blur-3xl top-8 left-6" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop id="stop1" stopColor="#4a6cf7" offset="0%"></stop>
          <stop id="stop2" stopColor="#4a6cf7" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M22.3,-10.8C30.3,-7.7,39.4,1.7,36.9,6.7C34.4,11.8,20.4,12.5,10.5,14.4C0.6,16.4,-5.1,19.4,-12.3,18.6C-19.4,17.8,-28,13.1,-31.3,5.3C-34.6,-2.5,-32.6,-13.4,-26.5,-16.1C-20.3,-18.8,-10.2,-13.3,-1.5,-12.1C7.1,-10.8,14.2,-13.9,22.3,-10.8Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
      ></path>
    </svg>
  );
};
