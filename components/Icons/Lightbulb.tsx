import React from 'react';

type SvgLightbulbType = {
  className?: string;
};

const SvgLightbulb = ({ className }: SvgLightbulbType) => {
  return (
    <svg aria-hidden="true" className={className} width="14" height="14" viewBox="0 0 14 14"><path d="M12 4.73C12 1.88 9.38-.26 6.45.03h-.01a4.9 4.9 0 0 0-4.4 4.12A4.6 4.6 0 0 0 3.9 8.43a1 1 0 0 1 .43.78v.17c0 .96.82 1.62 1.67 1.62h2c.85 0 1.66-.66 1.66-1.62v-.14c0-.31.15-.6.39-.77A4.63 4.63 0 0 0 12 4.73ZM4.02 4.4c.15-1.19 1.22-2.22 2.63-2.38C8.55 1.84 10 3.2 10 4.72c0 .85-.42 1.62-1.12 2.13A2.93 2.93 0 0 0 7.68 9H6.31A3 3 0 0 0 5.1 6.83 2.6 2.6 0 0 1 4.02 4.4ZM6 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H6Z" fill="currentColor"></path></svg>
  );
};

export default SvgLightbulb;
