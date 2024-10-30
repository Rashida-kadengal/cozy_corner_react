import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'

const ProductDetail = ({products}) => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.find(p => p.id === id); // Find product by ID

  if (!product) return <h2>Product not found</h2>;

  const { name, price, description, image } = product;

  return (
    <div className='detail-container w-50 p-5' style={{ margin: 50 }}>
    <img src={image} alt={name} width={500} />
    <h2>{name}</h2>
    <p>{description}</p>
    <h4>${price}</h4>

    {/* Add Snipcart attributes to the button */}
    <button
      className="snipcart-add-item btn btn-warning"
      data-item-id={id}
      data-item-name={name}
      data-item-price={price}
      data-item-description={description}
      data-item-url={`/products/${id}`}
      data-item-image={image}
    >
      Add to cart
    </button>
  </div>
  );
};

export default ProductDetail;
