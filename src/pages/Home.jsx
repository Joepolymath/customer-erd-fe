import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/NavBar';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(items, isLoading);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-sm rounded-md overflow-hidden w-64"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-2">{product.price}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
