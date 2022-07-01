import React from 'react';
import Layout from 'components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div class="container mx-auto max-w-[45rem] py-24 px-8">
        <h1 class="text-6xl gooddog mb-16">About this website</h1>
        <div class="flex flex-col	space-y-4">
          <p>
            My name is Cynthia and I am a{' '}
            <a
              href="http://cynthiahenaff.com"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-hover"
            >
              front-end developer based in Bordeaux.
            </a>
          </p>
          <p>
            This site is not a real e-commerce site. I developed it to
            illustrate the article "Create your own e-commerce site with Gatsby"
            published in Programmez magazine #253.
          </p>
          <p>
            You can find the source code here{' '}
            <a
              href="https://github.com/cynthiahenaff/paperjam"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-hover"
            >
              https://github.com/cynthiahenaff/paperjam
            </a>
            .
          </p>
          <p>
            It was built with Gatsby, the CSS is written with Tailwind and
            DaisyUI and it is hosted on Vercel.
          </p>

          <div class="flex justify-center">
            <img src="https://www.datocms-assets.com/62198/1656670086-couv-253.jpeg" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
