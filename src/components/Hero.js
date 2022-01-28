import React from 'react';
import Image from 'gatsby-image';

const Hero = () => (
  <div class="hero py-64 bg-gradient-to-br from-primary to-secondary text-primary-content">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <Image
        source="https://picsum.photos/id/1005/600/600"
        // class="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
);

export default Hero;
