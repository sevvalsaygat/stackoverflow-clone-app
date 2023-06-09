import React from 'react';

type SvgEyeType = {
  className?: string;
};

const SvgEye = ({ className }: SvgEyeType) => {
  return (
    <svg aria-hidden="true" className={className} width="14" height="14" viewBox="0 0 14 14"><path d="M7.05 2C2.63 2 0 7.5 0 7.5S2.63 13 7.05 13C11.38 13 14 7.5 14 7.5S11.37 2 7.05 2ZM7 11.17A3.59 3.59 0 0 1 3.5 7.5 3.6 3.6 0 0 1 7 3.83c1.94 0 3.5 1.65 3.5 3.67A3.57 3.57 0 0 1 7 11.17Zm0-1.84c.97 0 1.75-.81 1.75-1.83S7.97 5.67 7 5.67s-1.75.81-1.75 1.83S6.03 9.33 7 9.33Z" fill="currentColor"></path></svg>
  );
};

export default SvgEye;
