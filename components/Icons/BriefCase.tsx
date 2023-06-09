import React from 'react';

type SvgBriefCaseType = {
  className?: string;
};

const SvgBriefCase = ({ className }: SvgBriefCaseType) => {
  return (
    <svg aria-hidden="true" className={className} width="14" height="14" viewBox="0 0 14 14">
      <path
        d="M4 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 2 10.5v-5C2 4.67 2.67 4 3.5 4H4V3Zm5 1V3H5v1h4Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SvgBriefCase;
