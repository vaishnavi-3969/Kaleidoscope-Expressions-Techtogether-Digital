import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Confetti from 'react-dom-confetti';

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(['All', ...response.data]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 7000);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Marginalized Genders and Women Marketplace</h1>
          <p className="text-lg">
            Discover a wide range of products created by marginalized genders and women. Support their creativity and
            entrepreneurial spirit by exploring the unique items available in our marketplace.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-lg">Filter by category:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProducts(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-transparent text-purple-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">{product.title}</h2>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center text-gray-300">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-white mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-lg text-gray-300">Your cart is empty.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cart.map((product) => (
                <motion.li
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-purple-900 rounded-lg overflow-hidden shadow-lg"
                >
                  <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">{product.title}</h2>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="text-lg font-semibold">${product.price}</span>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="px-4 py-2 rounded-lg bg-purple-600 text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
        <Confetti active={showConfetti}/>
      </div>
    </div>
  );
};

export default Marketplace;
