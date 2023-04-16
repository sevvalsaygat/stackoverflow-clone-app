import React from 'react';

type SvgSelectType = {
  className?: string;
};

const SvgSelect = ({ className }: SvgSelectType) => {
  return (
    <svg aria-hidden="true" className={className} width="18" height="18" viewBox="0 0 18 18"><path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z" fill="currentColor"></path></svg>
  );
};

export default SvgSelect;
