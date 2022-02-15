import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import ProductCard from 'components/ProductCard';
import { graphql, Link } from 'gatsby';

const IndexPage = ({ data }) => {
  const products = data?.allDatoCmsProduct?.edges ?? [];
  return (
    <Layout>
      <Hero />

      <div class="container mx-auto max-w-[80rem] py-24 px-8">
        <h2 class="text-5xl gooddog py-8">Last products</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ node }) => (
            <ProductCard product={node} key={node?.index} />
          ))}
        </div>
        <div class="py-8 flex justify-center">
          <Link to="/products" class="btn btn-neutral">
            See all products
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getHomepageProducts {
    allDatoCmsProduct(
      limit: 3
      sort: { order: DESC, fields: meta___publishedAt }
    ) {
      edges {
        node {
          id
          slug
          name
          description
          price
          newProduct
          thumbnail {
            url
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
