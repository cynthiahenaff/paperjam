import React from 'react';
import Image from 'gatsby-image';

const ProductCard = ({ product }) => (
  <div class="card card-bordered bg-white">
    <figure>
      <Image fluid={product?.thumbnail?.fluid} />
    </figure>
    <div class="card-body">
      <h3 class="card-title">
        {product?.name}
        {product?.newProduct && <div class="badge mx-2 badge-accent">NEW</div>}
      </h3>
      {/* <p>{product?.description}</p> */}
      <div class="justify-end card-actions">
        <button
          class="btn btn-secondary btn-sm snipcart-add-item"
          data-item-id={product?.slug}
          data-item-price={product?.price}
          // data-item-url={`/products/${product?.slug}`}
          // data-item-url={`/`}
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
);

export default ProductCard;
