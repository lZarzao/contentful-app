import React from 'react';

function ProductContainer ({ products }) {
  return products.map((item, index) => (
    <div className='product-in-list' key={index}>
      <div className='product-image'>
        <a href={`product/${item.fields.slug}`}>
          <img
            src={item.fields.image[0].fields.file.url}
            alt={item.fields.image[0].fields.title}
            width='150px'
            height='150px'
          />
        </a>
      </div>
      <div className='product-details'>
        <div className='product-header'>
          <h2>
            <a href={`product/${item.fields.slug}`}>
              {item.fields.productName}
            </a>
          </h2>
          <p>{` by `}</p>
          <a href={`brand/${item.fields.brand.sys.id}`}>
            {item.fields.brand.fields.companyName}
          </a>
        </div>
        <p className='product-categories'>
          {item.fields.categories
            .map((category) => {
              return category.fields.title;
            })
            .join(', ')}
        </p>
        <p>{item.fields.productDescription}</p>
        <p>{item.fields.price} &euro;</p>
        <p className='product-tags'>
          <span>Tags:</span>
          {item.fields.tags.join(', ')}
        </p>
      </div>
    </div>
  ));
}

export default ProductContainer; 