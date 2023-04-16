import React from 'react';

type SvgUpLgType = {
  className?: string;
};

const SvgUpLg = ({ className }: SvgUpLgType) => {
  return (
    <svg aria-hidden="true" className={className} width="36" height="36" viewBox="0 0 36 36"><path d="M2 25h32L18 9 2 25Z" fill="currentColor"></path></svg>
  );
};

export default SvgUpLg;
