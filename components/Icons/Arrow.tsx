import React from 'react';

type SvgArrowType = {
  className?: string;
};

const SvgArrow = ({ className }: SvgArrowType) => {
  return (
    <svg width="26" height="26" className={className}>
      <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z" fill="currentColor"></path>
      <path
        opacity=".5"
        d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SvgArrow;
