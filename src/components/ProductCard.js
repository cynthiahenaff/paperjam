import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const ProductCard = ({ product }) => (
  <div class="card card-bordered bg-white">
    <figure>
      <Image fluid={product?.thumbnail?.fluid} />
    </figure>
    <div class="card-body p-4">
      <h3 class="card-title">
        {product?.name}
        {product?.newProduct && <div class="badge mx-2 badge-accent">NEW</div>}
      </h3>
      <div class="justify-end card-actions">
        <button
          class="btn btn-secondary btn-sm snipcart-add-item"
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
        <Link
          to={`/products/${product.slug}/#picture1`}
          class="btn btn-outline btn-circle btn-secondary btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;
