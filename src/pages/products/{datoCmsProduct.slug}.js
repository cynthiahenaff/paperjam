import React from 'react';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';

const Product = ({ data }) => {
  console.log(data);
  const product = data?.datoCmsProduct;
  return (
    <Layout>
      <div class="container mx-auto max-w-[45rem] py-24">
        <h1 class="text-6xl">{product?.name}</h1>
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
      thumbnail {
        fluid(maxWidth: 300) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default Product;
