import React from 'react';
import books from 'images/books.png';
import { Link } from 'gatsby';

const Hero = () => (
  <div class="hero py-28 bg-base-300 px-8">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <div class="flex-1">
        <img src={books} style={{ maxWidth: 400 }} />
      </div>

      <div class="flex-1">
        <h1 class="mb-5 text-8xl gooddog">PaperJam</h1>
        <p class="mb-5">
          The site specialising in graphic novels about the history of music
        </p>
        <Link class="btn btn-primary" to="/products">
          See products
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
