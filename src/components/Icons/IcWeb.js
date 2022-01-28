import * as React from 'react';

const IcWeb = ({ color = '#000', size = 24, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M47 24a22.986 22.986 0 1 1-2.8-11A22.91 22.91 0 0 1 47 24Z"
        strokeWidth={2}
      />
      <path
        d="M34.034 13A23.386 23.386 0 0 0 24 1a23.386 23.386 0 0 0-10.034 12M13.964 35A23.4 23.4 0 0 0 24 47a20.8 20.8 0 0 0 10.2-12M6.564 9h34.872M6.564 39h34.872M19 20v2.69a12.02 12.02 0 0 0 .858 4.456L21 30l2-7 2 7 1.142-2.854A12.02 12.02 0 0 0 27 22.69V20M31 20v2.69a12.02 12.02 0 0 0 .858 4.456L33 30l2-7 2 7 1.142-2.854A12.02 12.02 0 0 0 39 22.69V20M7 20v2.69a12.02 12.02 0 0 0 .858 4.456L9 30l2-7 2 7 1.142-2.854A12.02 12.02 0 0 0 15 22.69V20"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default IcWeb;
