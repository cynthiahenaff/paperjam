import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { IcBag } from 'components/Icons';
import logo from 'images/logo-white.svg';
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

const Header = () => {
  const { state } = useContext(SnipcartContext);

  return (
    <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box rounded-none">
      <div class="flex-none px-2 mx-2">
        <Link to="/">
          <img src={logo} alt="PaperJam" style={{ maxWidth: 200 }} />
        </Link>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div class="items-stretch hidden lg:flex">
          <Link to="/about">
            <a class="btn btn-ghost btn-sm rounded-btn">About</a>
          </Link>
          <Link to="/products">
            <a class="btn btn-ghost btn-sm rounded-btn">Products</a>
          </Link>
        </div>
      </div>
      <span class="px-2 mx-2">
        <button class="snipcart-checkout">
          <span class="flex gap-1">
            <IcBag />
            <span>{state?.cartTotal}€</span>
          </span>
        </button>
      </span>
    </div>
  );
};

export default Header;
