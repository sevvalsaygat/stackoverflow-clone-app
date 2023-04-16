import React from 'react';

type SvgLogoBlackSmallType = {
  className?: string;
};

const SvgLogoBlackSmall = ({ className }: SvgLogoBlackSmallType) => {
  return (
    <svg aria-hidden="true" className={className} width="18" height="18" viewBox="0 0 18 18"><path d="M13 15v-3h1v4H3v-4h1v3h9Z" fill="#9EA3A9"></path><path d="m10.02 2.73.91-.67 4.01 5.5-.8.62-4.12-5.45Zm3.01 6.65-5.2-4.21.78-.85 5.14 4.27-.72.79ZM6.12 8.1l6.19 2.74.45-.94L6.69 7l-.57 1.1Zm5.9 4.27L5.35 11.1l.21-1.11 6.6 1.42-.14.96ZM5 14h7v-1H5v1Z" fill="currentColor"></path></svg>
  );
};

export default SvgLogoBlackSmall;
