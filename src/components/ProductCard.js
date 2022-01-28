import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const ProductCard = ({ product }) => (
  <div class="card card-bordered bg-white">
    <figure>
      <Image fluid={product?.thumbnail?.fluid} />
    </figure>
    <div class="card-body">
      <h3 class="card-title">
        {product?.name}
        {/* <div class="badge mx-2 badge-accent">NEW</div> */}
      </h3>
      {/* <p>{product?.description}</p> */}
      <div class="justify-end card-actions">
        <Link
          role="button"
          to={`/products/${product?.slug}`}
          class="btn btn-secondary btn-sm"
        >
          Buy this book
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;
