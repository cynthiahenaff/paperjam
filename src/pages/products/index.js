import React from 'react';
import Layout from 'components/Layout';
import ProductCard from 'components/ProductCard';
import { graphql } from 'gatsby';

const ProductsPage = ({ data }) => {
  const products = data?.allDatoCmsProduct?.edges ?? [];

  return (
    <Layout>
      <div class="container mx-auto max-w-[80rem] py-24 px-8">
        <h1 class="text-6xl gooddog mb-16">All our products</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ node }) => (
            <ProductCard product={node} key={node?.index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getProducts {
    allDatoCmsProduct(sort: { meta: { publishedAt: DESC } }) {
      edges {
        node {
          id
          slug
          name
          description
          price
          newProduct
          thumbnail {
            gatsbyImageData(width: 300, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default ProductsPage;
