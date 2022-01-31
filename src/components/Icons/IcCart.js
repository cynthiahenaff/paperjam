import * as React from 'react';

const IcCart = ({ color = '#fff', size = 24, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M7.414 11H44.69a2 2 0 0 1 1.93 2.526l-4.106 15.052A6 6 0 0 1 36.726 33h-24.68"
        strokeWidth={2}
      />
      <path
        d="M1.308 1h.756a4 4 0 0 1 3.914 3.176l6.662 31.648A4 4 0 0 0 16.554 39h22.754M12.308 44a3 3 0 1 0 6 0 3 3 0 1 0-6 0ZM32.308 44a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default IcCart;
