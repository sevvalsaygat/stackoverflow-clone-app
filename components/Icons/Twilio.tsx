import React from 'react';

type SvgTwilioType = {
  className?: string;
};

const SvgTwilio = ({ className }: SvgTwilioType) => {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className={className}>
      <rect width="100%" height="100%" fill="#fff" />
      <path
        d="M30 15a15 15 0 1 0 15 15 15 15 0 0 0-15-15Zm0 26a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm6.8-14.7a3.1 3.1 0 1 1-3.1-3.1 3.12 3.12 0 0 1 3.1 3.1Zm0 7.4a3.1 3.1 0 1 1-3.1-3.1 3.12 3.12 0 0 1 3.1 3.1Zm-7.4 0a3.1 3.1 0 1 1-3.1-3.1 3.12 3.12 0 0 1 3.1 3.1Zm0-7.4a3.1 3.1 0 1 1-3.1-3.1 3.12 3.12 0 0 1 3.1 3.1Z"
        fill="#f22f46"
      />
    </svg>
  );
};

export default SvgTwilio;
