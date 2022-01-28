import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box rounded-none">
      <div class="flex-none px-2 mx-2">
        <span class="text-lg font-bold">daisyUI</span>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div class="items-stretch hidden lg:flex">
          <Link to="/">
            <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <a class="btn btn-ghost btn-sm rounded-btn">Products</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
