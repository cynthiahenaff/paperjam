import React from 'react';
import { Link } from 'gatsby';
import { IcCart } from 'components/Icons';

const Header = () => {
  return (
    <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box rounded-none">
      <div class="flex-none px-2 mx-2">
        <span class="text-lg font-bold">PaperJam</span>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div class="items-stretch hidden lg:flex">
          <Link to="/">
            <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <Link to="/about">
            <a class="btn btn-ghost btn-sm rounded-btn">About</a>
          </Link>
          <Link to="/products">
            <a class="btn btn-ghost btn-sm rounded-btn">Products</a>
          </Link>
        </div>
      </div>
      <span class=" px-2 mx-2">
        <button class="snipcart-checkout">
          <span class="flex gap-1">
            <IcCart />
            <span class="snipcart-total-price"></span>
            {/* <span class="snipcart-items-count"></span> */}
          </span>
        </button>
      </span>
    </div>
  );
};

export default Header;
