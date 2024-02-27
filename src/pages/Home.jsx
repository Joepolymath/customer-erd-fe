import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../features/carts/cartsSlice';

import Navbar from '../components/NavBar';

const Home = () => {
  const dispatch = useDispatch();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = (cartData) => {
    dispatch(addToCart(cartData));
    toast('Item Added to Cart Successfully', { position: 'top-center' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-sm rounded-md overflow-hidden w-64 relative"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-l font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-2">{product.price}</p>
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 absolute bottom-4 left-2"
                  onClick={() => {
                    handleAddToCart({
                      id: product.id,
                      image: product.image,
                      title: product.title,
                      price: product.price,
                    });
                  }}
                >
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
