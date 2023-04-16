import React from 'react';

type SvgDownLgType = {
  className?: string;
};

const SvgDownLg = ({ className }: SvgDownLgType) => {
  return (
    <svg aria-hidden="true" className={className} width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z" fill="currentColor"></path></svg>
  );
};

export default SvgDownLg;
