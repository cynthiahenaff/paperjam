import * as React from 'react';

const IcBag = ({ color = '#000', size = 24, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M15.5 29a.5.5 0 1 1-.5.5.5.5 0 0 1 .5-.5M32.5 29a.5.5 0 1 1-.5.5.5.5 0 0 1 .5-.5M31.484 35a9 9 0 0 1-14.97 0M15 19v-9a9 9 0 0 1 18 0v9"
        strokeWidth={2}
      />
      <path
        d="m42.932 41-1.8-26a2.144 2.144 0 0 0-2.138-2H9a2.144 2.144 0 0 0-2.138 2l-1.8 26q-.068 1-.068 2a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4q.006-1-.062-2Z"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default IcBag;
