import React from 'react';

export const ProductNote = () => {
  return (
    <section className="product-note">
      <div className="product-note-wrapper">
        <div className="container">
          <div className="product-note__content">
            <h2 className="title title_size-m product-note__title">
              Are you snoring loudly and&nbsp;feeling tired during the&nbsp;day?
            </h2>
            <div className="product-note__text">
              <p>
                Anti-snoring mouthpieces are one of the most effective and
                popular treatments for obstructive snoring. We particularly
                recommend them for:
              </p>
            </div>
            <ul className="product-note__list">
              <li className="product-note__item">
                People whose snoring has worsened with age
              </li>
              <li className="product-note__item">
                Those with a small or recessed jaw
              </li>
              <li className="product-note__item">After drinking alcohol</li>
              <li className="product-note__item">
                People with weight on their neck
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
