import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import product1 from '../images/product1.png';
import product1_2x from '../images/product1@2x.png';
import productIcon_1 from '../images/icons/product-icon-1.svg';
import product2 from '../images/product2.png';
import product2_2x from '../images/product2@2x.png';
import productIcon_2 from '../images/icons/product-icon-2.svg';
import product3 from '../images/product3.png';
import product3_2x from '../images/product3@2x.png';

const products = [
  {
    id: '1',
    title: 'SnoreRx',
    slug: 'snorerx',
    description:
      'SnoreRx is one of the best quality and most effective anti-snoring mouthpieces that you can buy online. This professional…',
    types: [{ name: 'Mouthpiesces', link: '/' }],
    image: {
      quality1x: product1,
      quality2x: product1_2x,
    },
    icon: productIcon_1,
    discount: {
      is_discount: true,
      discount_code: '1234',
    },
  },
  {
    id: '2',
    title: 'Vicks Warm Mist Humidifier',
    slug: 'vicks',
    description:
      'Do you often wake up with a dry mouth and nose? Humidifiers are a great way to relieve snoring caused by nasal congestion and…',
    types: [
      { name: 'Nasal', link: '/' },
      { name: 'Open Mouth', link: '/' },
    ],
    image: {
      quality1x: product2,
      quality2x: product2_2x,
    },
    icon: productIcon_1,
    discount: {
      is_discount: false,
      discount_code: '',
    },
  },
  {
    id: '3',
    title: 'FitPlus Premium Wedge Pillow',
    slug: 'FitPlus',
    description:
      'Do you snore when you sleep on your back? Wedge pillows allow you to sleep on your back whilst reducing the compressing effect of…',
    types: [
      { name: 'Pillows', link: '/' },
      { name: 'Position', link: '/' },
    ],
    image: {
      quality1x: product3,
      quality2x: product3_2x,
    },
    icon: productIcon_2,
    discount: {
      is_discount: false,
      discount_code: '',
    },
  },
  {
    id: '4',
    title: 'SnoreRx',
    slug: 'snorerx',
    description:
      'SnoreRx is one of the best quality and most effective anti-snoring mouthpieces that you can buy online. This professional…',
    types: [{ name: 'Mouthpiesces', link: '/' }],
    image: {
      quality1x: product1,
      quality2x: product1_2x,
    },
    icon: productIcon_1,
    discount: {
      is_discount: true,
      discount_code: '1234',
    },
  },
  {
    id: '5',
    title: 'Vicks Warm Mist Humidifier',
    slug: 'vicks',
    description:
      'Do you often wake up with a dry mouth and nose? Humidifiers are a great way to relieve snoring caused by nasal congestion and…',
    types: [
      { name: 'Nasal', link: '/' },
      { name: 'Open Mouth', link: '/' },
    ],
    image: {
      quality1x: product2,
      quality2x: product2_2x,
    },
    icon: productIcon_1,
    discount: {
      is_discount: false,
      discount_code: '',
    },
  },
  {
    id: '6',
    title: 'FitPlus Premium Wedge Pillow',
    slug: 'FitPlus',
    description:
      'Do you snore when you sleep on your back? Wedge pillows allow you to sleep on your back whilst reducing the compressing effect of…',
    types: [
      { name: 'Pillows', link: '/' },
      { name: 'Position', link: '/' },
    ],
    image: {
      quality1x: product3,
      quality2x: product3_2x,
    },
    icon: productIcon_2,
    discount: {
      is_discount: false,
      discount_code: '',
    },
  },
];

export const Products = () => {
  return (
    <div className="products-wrapper">
      {products.map((product) => {
        return (
          <article className="product" key={product.id}>
            {product.discount.is_discount && (
              <div className="discount-note">
                <span>Exclusive SnoreLab discount code</span>
              </div>
            )}
            <a href="product.html" className="product__img">
              <LazyLoadImage
                width="265"
                height="210"
                src={product.image.quality1x}
                srcSet={
                  product.image.quality2x &&
                  `${product.image.quality1x} 1x, ${product.image.quality2x} 2x`
                }
                alt="product"
              />
            </a>
            <div className="product__flags">
              {/* This method adds flag links and adds commas correctly */}
              {product.types.map((type, i, arr) => {
                return (
                  <span key={type.name}>
                    <a
                      className="link"
                      href={type.link}
                      dangerouslySetInnerHTML={{ __html: type.name }}
                    ></a>
                    {i === arr.length - 1 ? '' : ' , '}
                  </span>
                );
              })}
            </div>
            <a href="product.html" className="link">
              <h3 className="title title_size-s product__title">
                {product.title}
              </h3>
            </a>
            <div className="product__note">
              <p>{product.description}</p>
            </div>
            <div className="product__icon">
              <img src={product.icon} alt="icon" />
            </div>
          </article>
        );
      })}
    </div>
  );
};
