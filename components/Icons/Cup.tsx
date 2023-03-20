import React from 'react';

type SvgCupType = {
  className?: string;
};

/* eslint-disable max-len */
const SvgCup = ({ className }: SvgCupType) => {
  return (
    <svg aria-hidden="true" className={className} width="18" height="18" viewBox="0 0 18 18">
      <path
        d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
/* eslint-enable max-len */

export default SvgCup;
