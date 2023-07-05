import React from 'react';
import books from 'images/illu.png';
import { Link } from 'gatsby';

const Hero = () => (
  <div class="hero py-28 bg-base-200 px-8">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <div class="flex-1">
        <img src={books} style={{ maxWidth: 420 }} alt="" />
      </div>

      <div class="flex-1">
        <h1 class="mb-5 text-8xl gooddog">PaperJam</h1>
        <p>
          Discover the history of music through captivating graphic novels...
        </p>
        <p class="mb-5">or dare to uncover the truth: this website is fake! </p>

        <Link class="btn btn-primary" to="/products">
          See products
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
