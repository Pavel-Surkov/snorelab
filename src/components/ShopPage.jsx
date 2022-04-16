import React from 'react';
import { ShopMain } from './ShopMain';
import { ProductType } from './ProductType';
import { Products } from './Products';

export const ShopPage = () => {
  return (
    <>
      <ShopMain />
      <section className="shop-content">
        <div className="shop-content__wrapper">
          <div className="container">
            <div className="shop-content__content">
              <ProductType />
              <Products />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
