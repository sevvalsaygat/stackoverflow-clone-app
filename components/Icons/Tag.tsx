import React from 'react';

type SvgTagType = {
  className?: string;
};

const SvgTag = ({ className }: SvgTagType) => {
  return (
    <svg width="26" height="26" className={className}>
      <path
        d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
        fill="currentColor"
      ></path>
      <path
        opacity=".5"
        d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SvgTag;