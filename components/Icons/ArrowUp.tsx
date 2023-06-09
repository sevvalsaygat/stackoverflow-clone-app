import React from 'react';

type SvgArrowUpType = {
  className?: string;
};

const SvgArrowUp = ({ className }: SvgArrowUpType) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="20"
      height="20"
      viewBox="0 0 18 18"
    >
      <path
        d="m16.01 10.62-1.4 1.4L9 6.45l-5.59 5.59-1.4-1.41 7-7 7 7Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SvgArrowUp;
