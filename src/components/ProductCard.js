import React from 'react';
import { Link } from 'gatsby';
import { IcAddToCart } from 'components/Icons';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProductCard = ({ product }) => {
  return (
    <div class="card bg-base-100 shadow-md">
      <figure>
        <GatsbyImage
          image={product?.thumbnail.gatsbyImageData}
          alt={product?.thumbnail.alt}
          class="w-full"
        />
      </figure>
      <div class="card-body p-4 flex flex-col">
        <h3 class="card-title flex-1">{product?.name}</h3>
        <div class="flex items-center">
          <p class="text-2xl">{product.price}€</p>
          {product?.newProduct && (
            <div class="badge mx-2 badge-accent">NEW</div>
          )}
        </div>

        <div class="justify-end card-actions">
          <Link
            to={`/products/${product.slug}/#picture1`}
            class="btn btn-ghost btn-primary btn-sm"
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
};

export default ProductCard;
