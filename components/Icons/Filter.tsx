import React from 'react';

type SvgFilterType = {
  className?: string;
};

const SvgFilter = ({ className }: SvgFilterType) => {
  return (
    <svg aria-hidden="true" className={className} width="18" height="18" viewBox="0 0 18 18">
      <path d="M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z" fill="currentColor"></path>
    </svg>
  );
};

export default SvgFilter;
