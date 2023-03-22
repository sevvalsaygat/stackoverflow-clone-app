import React from 'react';

type SvgArrowDownType = {
  className?: string;
};

const SvgArrowDown = ({ className }: SvgArrowDownType) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="20"
      height="20"
      viewBox="0 0 18 18"
    >
      <path
        d="m16.01 7.43-1.4-1.41L9 11.6 3.42 6l-1.4 1.42 7 7 7-7Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SvgArrowDown;
