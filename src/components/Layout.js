import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { SNIPCART_APIKEY } from 'constants';

const Layout = ({ children }) => {
  return (
    <div data-theme="cupcake" class="flex flex-col h-screen bg-base-100">
      <Helmet title="PaperJam" defer={false}>
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
      >
        {/* <button-primary>
          <button class="snipcart-button-primary btn btn-primary"></button>
        </button-primary> */}
      </div>

      <div class="content">
        <Header />
        <main class="flex-1 bg-base-100 text-base-content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
