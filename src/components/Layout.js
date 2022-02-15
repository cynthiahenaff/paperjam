import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description, image }) => {
  return (
    <div data-theme="cupcake" class="flex flex-col min-h-screen bg-base-100">
      <Helmet
        title="PaperJam"
        defer={false}
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@monsieur_riz" />
      </Helmet>

      <div class="content min-h-screen flex flex-col">
        <Header />
        <main class="flex-1 bg-base-100 text-base-content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
