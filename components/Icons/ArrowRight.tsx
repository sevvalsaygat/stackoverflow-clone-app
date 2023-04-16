import React from 'react';

type SvgArrowRightType = {
  className?: string;
};

const SvgArrowRight = ({ className }: SvgArrowRightType) => {
  return (
    <svg aria-hidden="true" className={className} width="13" height="14" viewBox="0 0 13 14"><path d="m4.38 4.62 1.24-1.24L9.24 7l-3.62 3.62-1.24-1.24L6.76 7 4.38 4.62Z" fill="currentColor"></path></svg>
  );
};

export default SvgArrowRight;
