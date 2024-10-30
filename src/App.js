import React, { useEffect } from 'react';
import Product from './components/Product';
import { Routes,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'
import { useState } from 'react';
import Home from './components/Home';
import Banner from './components/Banner';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

const App = () => {

  
  const products = [
    {
      id: '1',
      name: 'Modern Sofa',
      price: 499.99,
      description: 'A stylish and comfortable modern sofa for your living room.',
      image: 'https://images.pexels.com/photos/8580720/pexels-photo-8580720.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      name: 'Elegant Dining Table',
      price: 799.99,
      description: 'A beautiful dining table that seats six comfortably.',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      name: 'Wooden Coffee Table',
      price: 299.99,
      description: 'A rustic wooden coffee table perfect for any living room.',
      image: 'https://images.pexels.com/photos/4195598/pexels-photo-4195598.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '4',
      name: 'Minimalist Bookshelf',
      price: 199.99,
      description: 'A sleek and minimalist bookshelf for your books and decor.',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '5',
      name: 'Comfortable Office Chair',
      price: 159.99,
      description: 'An ergonomic office chair that provides excellent support.',
      image: 'https://images.pexels.com/photos/7680195/pexels-photo-7680195.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '6',
      name: 'Stylish Nightstand',
      price: 79.99,
      description: 'A chic nightstand to complement your bedroom decor.',
      image: 'https://images.pexels.com/photos/29100031/pexels-photo-29100031/free-photo-of-warm-interior-lamp-on-wooden-nightstand.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '7',
      name: 'Luxurious Bed Frame',
      price: 899.99,
      description: 'A luxurious bed frame with a modern design.',
      image: 'https://images.pexels.com/photos/11063185/pexels-photo-11063185.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '8',
      name: 'Vintage Armchair',
      price: 249.99,
      description: 'A vintage armchair that adds character to any room.',
      image: 'https://images.pexels.com/photos/8327635/pexels-photo-8327635.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '9',
      name: 'Contemporary TV Stand',
      price: 349.99,
      description: 'A sleek TV stand for your living room entertainment.',
      image: 'https://images.pexels.com/photos/7512034/pexels-photo-7512034.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '10',
      name: 'Outdoor Patio Set',
      price: 799.99,
      description: 'A stylish outdoor patio set for your backyard.',
      image: 'https://images.pexels.com/photos/7587879/pexels-photo-7587879.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '11',
      name: 'Rustic Dining Chair',
      price: 129.99,
      description: 'A rustic dining chair that adds charm to your dining space.',
      image: 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '12',
      name: 'Compact Desk',
      price: 199.99,
      description: 'A compact desk perfect for small spaces.',
      image: 'https://images.pexels.com/photos/6894222/pexels-photo-6894222.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '13',
      name: 'Folding Chair',
      price: 49.99,
      description: 'A practical folding chair for extra seating.',
      image: 'https://images.pexels.com/photos/2996279/pexels-photo-2996279.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '14',
      name: 'Stylish Ottoman',
      price: 99.99,
      description: 'A stylish ottoman for footrest or extra seating.',
      image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '15',
      name: 'Leather Recliner',
      price: 599.99,
      description: 'A luxurious leather recliner for ultimate relaxation.',
      image: 'https://images.pexels.com/photos/7206219/pexels-photo-7206219.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '16',
      name: 'Wall-Mounted Shelves',
      price: 69.99,
      description: 'Stylish wall-mounted shelves for space-saving storage.',
      image: 'https://images.pexels.com/photos/6969873/pexels-photo-6969873.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '17',
      name: 'Entryway Bench',
      price: 149.99,
      description: 'A functional entryway bench with storage.',
      image: 'https://images.pexels.com/photos/8113006/pexels-photo-8113006.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '18',
      name: 'Office Storage Cabinet',
      price: 399.99,
      description: 'A practical storage cabinet for office supplies.',
      image: 'https://images.pexels.com/photos/7534232/pexels-photo-7534232.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '19',
      name: 'Hammock Chair',
      price: 89.99,
      description: 'A relaxing hammock chair for indoor or outdoor use.',
      image: 'https://images.pexels.com/photos/4065445/pexels-photo-4065445.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '20',
      name: 'Kids’ Study Table',
      price: 159.99,
      description: 'A colorful study table designed for kids.',
      image: 'https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  
  const offers=[ {
    id: '6',
    name: 'Stylish Nightstand',
    price: 79.99,
    description: 'A chic nightstand to complement your bedroom decor.',
    image: 'https://images.pexels.com/photos/29100031/pexels-photo-29100031/free-photo-of-warm-interior-lamp-on-wooden-nightstand.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '7',
    name: 'Luxurious Bed Frame',
    price: 899.99,
    description: 'A luxurious bed frame with a modern design.',
    image: 'https://images.pexels.com/photos/11063185/pexels-photo-11063185.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '8',
    name: 'Vintage Armchair',
    price: 249.99,
    description: 'A vintage armchair that adds character to any room.',
    image: 'https://images.pexels.com/photos/8327635/pexels-photo-8327635.jpeg?auto=compress&cs=tinysrgb&w=600',
  },{
    id: '20',
    name: 'Kids’ Study Table',
    price: 159.99,
    description: 'A colorful study table designed for kids.',
    image: 'https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=600',
  }, {
    id: '9',
    name: 'Contemporary TV Stand',
    price: 349.99,
    description: 'A sleek TV stand for your living room entertainment.',
    image: 'https://images.pexels.com/photos/7512034/pexels-photo-7512034.jpeg?auto=compress&cs=tinysrgb&w=600',
  }]

  return (
   <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home products={products} offers={offers}/>} /> 
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/products/" element={<Product products={products} />} />
    <Route path="/products/:id" element={<ProductDetail products={products} />} />
    <Route path="/about/" element={<About/>} />
    <Route path="/contact/" element={<Contact/>} />
    <Route path="/contactme" element={<ContactMe/>} />
    </Routes>
    <Footer/>

 
   </>
  );
};

export default App;
