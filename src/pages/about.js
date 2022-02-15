import React from 'react';
import Layout from 'components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div class="container mx-auto max-w-[45rem] py-24 px-8">
        <h1 class="text-6xl gooddog mb-16">About this website</h1>
        <p>
          This website is not a real e-commerce website. It was built to
          illustrate the article "Build your own ecommerce website".
        </p>
        <p>
          It was developed with Gatsby, the CSS is written with Tailwind and
          DaisyUI and it is hosted on Vercel.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
