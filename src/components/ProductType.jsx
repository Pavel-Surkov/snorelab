import React, { useState } from 'react';

const productTabs = [
  'All',
  'Mouthpieces',
  'Nasal',
  'Pillows',
  'Position',
  'Open mouth',
];

export const ProductType = () => {
  const [activeType, setActiveType] = useState('all');

  const handleTypeClick = (e, type) => {
    const lowerType = type.toLowerCase();

    setActiveType(lowerType);
  };

  return (
    <aside className="product-type">
      <h3 className="title product-type__title">Product type</h3>
      <ul className="product-type__sort">
        {productTabs.map((type) => {
          return (
            <li className="product-type__sort-item" key={type}>
              <button
                type="button"
                className={`product-type__sort-btn ${
                  activeType === type.toLowerCase()
                    ? 'product-type__sort-btn_active'
                    : ''
                }`}
                onClick={(evt) => handleTypeClick(evt, type)}
              >
                {type}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
