import React from 'react';
import { Link } from 'react-router-dom'; // Use React Router for navigation
import { useSearchParams } from 'react-router-dom';
import '../App.css'

// const Product = ({ id, name, price, description, image }) => {
  const Product=({products})=>{
  const [searchParams]=useSearchParams();
  var searchText=searchParams.get("search");
  const filteredProductList = products.filter((p) => p.name.toLowerCase().includes(searchText?searchText.toLowerCase():""));
  return (
    <>
{
  filteredProductList.map((item)=>{
    return <div className="product cardprd " style={{ margin: 10 }}>
      <img src={item.image} alt={item.name} width={250} height={200}  className='image' />
      <h2 style={{
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>{item.name}</h2>
   <p>{item.description}</p>
   <button className='btn btn-warning '><Link to={`/products/${item.id}`} className="text-white text-decoration-none">
    View Details
    </Link></button>
 
  </div> 
  })
}

     
    </>
  );
};

export default Product;
