import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import ProductCard from 'components/ProductCard';
import { graphql, Link } from 'gatsby';

const IndexPage = ({ data }) => {
  const products = data?.allDatoCmsProduct?.edges ?? [];
  console.log(data);
  return (
    <Layout>
      <Hero />

      <div class="container mx-auto max-w-[80rem] py-24">
        <h2 class="text-5xl py-8">Last products</h2>
        <div class="grid grid-cols-3 gap-x-8">
          {products.map(({ node }) => (
            <ProductCard product={node} key={node?.index} />
          ))}
        </div>
        <div class="py-6">
          <Link to="/products" class="btn btn-primary">
            See all products
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getProducts {
    allDatoCmsProduct(limit: 3) {
      edges {
        node {
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
    }
  }
`;

export default IndexPage;
