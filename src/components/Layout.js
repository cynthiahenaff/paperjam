import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { SNIPCART_APIKEY } from '../constants';

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

        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        {/* <!-- Snipcart stylesheet --> */}
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css"
        />

        {/* <!-- Snipcart script --> */}
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"
        ></script>
      </Helmet>

      {/* <!-- Element where you set your API key and insert your custom templates --> */}
      <div
        hidden
        id="snipcart"
        data-api-key={SNIPCART_APIKEY}
        // data-config-add-product-behavior="none"
        data-config-modal-style="side"
        data-currency="eur"
      ></div>

      <div class="content min-h-screen flex flex-col">
        <Header />
        <main class="flex-1 bg-base-100 text-base-content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
