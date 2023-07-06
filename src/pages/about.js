import React from 'react';
import Layout from 'components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div class="container mx-auto max-w-[45rem] py-24 px-8">
        <h1 class="text-6xl gooddog mb-16">About this website</h1>
        <div class="flex flex-col	space-y-4">
          <p>Welcome to Paperjam!</p>
          <p>
            Discover a unique world where music meets graphic art. Paperjam is
            your ultimate destination for music and comic book enthusiasts. Dive
            into an exceptional collection of graphic novels that captivate the
            minds and souls of music lovers.
          </p>
          <p>
            I'm Cynthia, a{' '}
            <a
              href="http://cynthiahenaff.com/?utm_source=paperjam"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-neutral"
            >
              passionate developer based in Bordeaux
            </a>
            .
          </p>
          <p>
            If you've arrived here, it's likely because of the article "Create
            your own e-commerce site with Gatsby" published in Programmez
            magazine (issue #253). This article will guide you through the
            process of creating your own e-commerce site using Gatsby, a
            powerful technology based on the Jamstack. You can find it on{' '}
            <a
              href="https://cynthiahenaff.com/writing/create-your-ecommerce-site-with-gatsby/?utm_source=paperjam"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-neutral"
            >
              my website
            </a>{' '}
            or on{' '}
            <a
              href="https://www.programmez.com/magazine/article/creer-son-site-e-commerce-avec-gatsby-jamstack"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-neutral"
            >
              Programmez.com
            </a>
            .
          </p>
          <p>
            The article details the necessary steps to create your own
            e-commerce site, with a focus on Gatsby, a modern technology that
            enables optimal performance and a seamless user experience, along
            with Snipcart and Vercel. Whether you're an experienced developer or
            a curious enthusiast eager to explore the behind-the-scenes of
            e-commerce site creation, this article will provide you with the
            necessary knowledge to get started.
          </p>
          <p>
            The source code is available on{' '}
            <a
              href="https://github.com/cynthiahenaff/paperjam"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-neutral"
            >
              Github
            </a>
            .
          </p>
          <p>
            Thank you for choosing to visit Paperjam and for your interest in
            the article about creating an e-commerce site with Gatsby. I hope
            this experience will inspire you and introduce you to the power of
            Jamstack.
          </p>
          <p>
            PaperJam was built with Gatsby, the CSS is written with Tailwind and
            DaisyUI and is hosted on Vercel.
          </p>

          <div class="flex justify-center">
            <img
              src="https://www.datocms-assets.com/62198/1656670086-couv-253.jpeg"
              alt="Programmez magazine's Cover "
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
