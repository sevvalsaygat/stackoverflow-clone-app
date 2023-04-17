import React from 'react';

type SvgErrorType = {
  className?: string;
};

const SvgError = ({ className }: SvgErrorType) => {
  return (
    <svg aria-hidden="true" className={className} width="18" height="18" viewBox="0 0 18 18"><path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z" fill="currentColor"></path></svg>
  );
};

export default SvgError;
