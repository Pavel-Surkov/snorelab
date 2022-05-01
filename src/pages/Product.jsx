import React from 'react';
import { ProductNote } from '../components/ProductNote';

export const Product = () => {
  return (
    <main className="product-page">
      <section className="product-main"></section>
      <ProductNote />
      <section className="product-info"></section>
      <section className="product-reviews"></section>
      <section className="remedies"></section>
      <section className="full-review"></section>
    </main>
  );
};
