import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import pomo from '../assets/fruits/pomo.jpg'
import banana from '../assets/fruits/banana.png'
import mango from '../assets/fruits/mango.png'
import grapes from '../assets/fruits/grapes.png'
import watermelon from '../assets/fruits/watermelon.png'
import strawberries from '../assets/fruits/strawberries.png'
import greenchillie from '../assets/fruits/greenchillie.png'
import corinder from '../assets/fruits/corinder.png'
import onion from '../assets/fruits/onion.png'
import tomato from '../assets/fruits/tomato.png'

const ProductShowcase = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: ' POMEGRANATE ',
      image: pomo,
      type: 'fruit',
      description: 'Available in Bhagwa, Ganesh, and Arakta varieties.',
      origin: 'Maharashtra, India (HSN Code : 08109010)'
    },
    {
      id: 2,
      name: 'Banana',
      image: banana,
      type: 'fruit',
      description: 'Rich in potassium, dietary fiber, and Vitamin B6, they meet all EU and GCC export standards.',
      origin: 'Maharashtra, India (HSN Code : 08039010)'
    },
    {
      id: 3,
      name: 'Mango',
      image: mango,
      type: 'fruit',
      description: 'Available in popular varieties such as Alphonso and Kesar.',
      origin: 'Maharashtra, India (HSN Code : 08045020)'
    },
    {
      id: 4,
      name: 'Grapes',
      image: grapes,
      type: 'fruit',
      description: 'Available in both green and black varieties.',
      origin: 'Maharashtra, India (HSN Code : 0861000)'
    },
    {
      id: 5,
      name: 'Watermelon',
      image: watermelon,
      type: 'fruit',
      description: 'Rich in hydration and vitamins A and C, they meet all EU and GCC export standards.',
      origin: 'Maharashtra, India (HSN Code : 08071100)'
    },
    {
      id: 6,
      name: 'Strawberries',
      image: strawberries,
      type: 'fruit',
      description: ' High in Vitamin C and antioxidants, they meet all Eu and GCC export standards.',
      origin: 'Maharashtra, India (HSN Code : 08101000)'
    },
    {
      id: 7,
      name: 'Green Chillie',
      image: greenchillie,
      type: 'vegetable',
      description: 'Rich in vitamins A and C, they meet all EU and GCC export standards.',
      origin: 'Maharashtra, India (HSN Code : 07096010)'
    },
    {
      id: 8,
      name: 'Coriander',
      image: corinder,
      type: 'vegetable',
      description: 'Rich in vitamins and antioxidants, it meets all EU and GCC export standards.',
      origin: 'Maharashtra, India (HSN Code : 09092200)'
    },
    {
      id: 9,
      name: 'Onion',
      image: onion,
      type: 'vegetable',
      description: 'High in vitamins B6 and C, they meet all EU and GCC export standards. ',
      origin: 'Maharashtra, India (HSN Code : 07031010)'
    },
    {
      id: 10,
      name: 'Tomato',
      image: tomato,
      type: 'vegetable',
      description: 'Rich in vitamins C and K, they meet all EU and GCC export standards.',
      origin: 'Maharashtra, India (HSN Code : 0702)'
    },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.type === filter);

  const filters = [
    // { key: 'all', label: 'All Products' },
    { key: 'fruit', label: 'Fruits' },
    { key: 'vegetable', label: 'Vegetables' }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of agricultural products, 
            sourced from the finest farms worldwide and distributed globally.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === filterOption.key
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-700 shadow-md'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  product.type === 'export' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-green-500 text-white'
                }`}>
                  {product.type === 'fruit' ? 'Fruit' : 'Vegetables'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {product.name}
                </h3>
                {product.origin && (
                  <p className="text-sm text-green-600 mb-3 font-medium">
                    Origin: {product.origin}
                  </p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <button className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300 group-hover:translate-x-2">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;