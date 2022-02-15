import * as React from 'react';

const IcAddToCart = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    class="stroke-current"
    {...props}
  >
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M9 41.936a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 1 0-7.5 0ZM24 41.936a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 1 0-7.5 0ZM1.5 14.186 6.158 29.96a3 3 0 0 0 2.9 2.226h21.636A3 3 0 0 0 33.6 29.96l6.476-24.308a4.498 4.498 0 0 1 4.348-3.34H46.5M19.5 12.686v12M13.5 18.686h12"
        strokeWidth={3}
      />
    </g>
  </svg>
);

export default IcAddToCart;
