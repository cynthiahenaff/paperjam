import React from 'react';
import books from 'images/books.png';
import { Link } from 'gatsby';

const Hero = () => (
  <div class="hero py-24 bg-gradient-to-br from-primary to-secondary ">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <div class="flex-1">
        <img src={books} style={{ maxWidth: 400 }} />
      </div>

      <div class="flex-1">
        <h1 class="mb-5 text-7xl font-bold">PaperJam</h1>
        <p class="mb-5">
          The site specialising in graphic novels about the history of music
        </p>
        <Link class="btn btn-neutral" to="/products">
          See products
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
