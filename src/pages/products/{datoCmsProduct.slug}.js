import React from 'react';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';

const Product = ({ data }) => {
  const product = data?.datoCmsProduct;

  return (
    <Layout>
      <div class="container mx-auto max-w-[65rem] py-24 text-left px-8">
        <div class="grid md:grid-cols-2 gap-16">
          <div class="w-full carousel">
            {(product?.gallery ?? []).map(({ alt, url }, index) => {
              const currentIndex = index + 1;
              const nextIndex =
                currentIndex === product?.gallery.length ? 1 : currentIndex + 1;
              const prevIndex =
                currentIndex === 1 ? product?.gallery.length : currentIndex - 1;

              return (
                <div
                  id={`picture${currentIndex}`}
                  class="relative w-full carousel-item"
                >
                  <img src={url} class="w-full object-cover	" alt={alt} />
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`/products/${product?.slug}/#picture${prevIndex}`}
                      class="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={`/products/${product?.slug}/#picture${nextIndex}`}
                      class="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h1 class="text-6xl gooddog mb-8">{product?.name}</h1>
            <div class="flex items-center mb-8">
              <p class="text-4xl">{product.price}€</p>
              {product?.newProduct && (
                <div class="badge mx-2 badge-accent">NEW</div>
              )}
            </div>

            <p>{product?.description}</p>
            <div class="flex justify-end mt-8">
              <button
                class="btn btn-secondary snipcart-add-item"
                data-item-id={product?.slug}
                data-item-price={product?.price}
                data-item-url={`/products/${product?.slug}`}
                data-item-description={product?.description}
                data-item-custom1-name="Gift"
                data-item-custom1-type="checkbox"
                data-item-image={product?.thumbnail?.url}
                data-item-name={product?.name}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getProduct($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      id
      slug
      name
      description
      price
      newProduct
      thumbnail {
        fluid(maxWidth: 300) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      gallery {
        url
        alt
      }
    }
  }
`;

export default Product;
