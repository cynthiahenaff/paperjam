import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { IcAddToCart } from 'components/Icons';

const ProductCard = ({ product }) => (
  <div class="card card-bordered bg-white">
    <figure>
      <Image fluid={product?.thumbnail?.fluid} />
    </figure>
    <div class="card-body p-4 flex flex-col">
      <h3 class="card-title flex-1">{product?.name}</h3>
      <div class="flex items-center">
        <p class="text-2xl">{product.price}€</p>
        {product?.newProduct && <div class="badge mx-2 badge-accent">NEW</div>}
      </div>

      <div class="justify-end card-actions">
        <Link
          to={`/products/${product.slug}/#picture1`}
          class="btn btn-outline btn-secondary btn-sm"
        >
          See more
        </Link>

        <button
          class="btn btn-secondary btn-circle btn-sm snipcart-add-item"
          data-item-id={product?.slug}
          data-item-price={product?.price}
          data-item-url={`/products/${product?.slug}`}
          data-item-description={product?.description}
          data-item-custom1-name="Gift"
          data-item-custom1-type="checkbox"
          data-item-image={product?.thumbnail?.url}
          data-item-name={product?.name}
        >
          <IcAddToCart />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
