import * as React from 'react';

const IcTwitter = ({ color = '#000', size = 24, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <path
      d="m46 13.256-4-1 2-4-4.928 1.4A8.96 8.96 0 0 0 24 16.256v2c-7.078 1.46-13.268-2.4-19-9q-1.5 8 3 12l-6-1c.81 4.138 2.724 7.4 8 8l-5 2c2 4 5.132 4.62 10 5a21.496 21.496 0 0 1-13 4c25.51 11.338 40-5.328 40-20V16.6Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default IcTwitter;
