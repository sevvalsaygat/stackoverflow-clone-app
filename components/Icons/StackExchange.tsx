import React from 'react';

type SvgStackExchangeType = {
  className?: string;
};

const SvgStackExchange = ({ className }: SvgStackExchangeType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} width="16" height="16">
      <path fill="#3A6DA6" d="M10.25 15.58 6.64 19.8H5.51c-1.66 0-3.01-1.42-3.01-3.19v-1.03h7.75z" />
      <path fill="#62B0DF" d="m18.99 5.36-3.41 3.98H2.5V5.36z" />
      <path fill="#5184C1" d="m14.6 10.49-3.4 3.98H2.5v-3.98z" />
      <path fill="#46A2D9" d="M21.5 5.36v3.98h-5.92l3.41-3.98z" />
      <path fill="#326EB6" d="M21.5 10.49v3.98H11.2l3.4-3.98z" />
      <path fill="#185397" d="M21.5 15.58v1.03c0 1.76-1.35 3.19-3.01 3.19h-.87l-4 4.2v-4.2H6.64l3.61-4.22H21.5z" />
      <path fill="#8FD8F6" d="M21.5 3.17v1.05h-19V3.17C2.5 1.42 3.85 0 5.51 0h12.98c1.44 0 2.64 1.07 2.94 2.5.05.22.07.44.07.67z" />
    </svg>
  );
};

export default SvgStackExchange;
