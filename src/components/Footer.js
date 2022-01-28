import React from 'react';
import { IcWeb, IcTwitter } from 'components/Icons';

const Footer = () => {
  return (
    <footer class="p-10 footer bg-base-200 text-base-content footer-center">
      <div class="grid grid-flow-col gap-4">
        {/* <a class="link link-hover">Product</a> */}
        <a
          class="link link-hover"
          href="https://cynthiahenaff.com"
          target="_blank"
        >
          About me
        </a>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a href="https://cynthiahenaff.com" target="_blank">
            <IcWeb />
          </a>
          <a href="https://twitter.com/monsieur_riz" target="_blank">
            <IcTwitter />
          </a>
        </div>
      </div>
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - Cynthia Henaff -{' '}
          <a
            class="link link-hover"
            href="https://cynthiahenaff.com"
            target="_blank"
          >
            Frontend Developer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
