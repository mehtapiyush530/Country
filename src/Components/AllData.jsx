import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search'; // Import the Search component

const AllData = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountryClick = (country) => {
    navigate('/country-details', { state: { country } });
  };

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="flex justify-evenly flex-wrap py-10">
        {filteredProducts.map((product) => (
          <div
            key={product.cca3}
            className="border border-black mb-5 cursor-pointer"
            onClick={() => handleCountryClick(product)}
          >
            <img src={product.flags.png} alt={product.name.common} className="h-[14rem] w-[24rem]" />
            <h2 className="px-2 font-bold text-xl">{product.name.common}</h2>
            <p className="px-2 pb-2">Population: {product.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllData;
