import { useState } from 'react';
import Confetti from 'react-confetti';

import Navbar from '../components/NavBar';

const CustomerRatingPage = () => {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {isRated ? (
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full flex flex-col items-center justify-center">
            <Confetti
              width={1200}
              height={2200}
              numberOfPieces={2000}
              recycle={false}
              gravity={0.1}
            />
            <h2>THANK YOU</h2>
            <h3>For your Review</h3>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Rate Our Service
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-8 w-8 fill-current ${
                      star <= rating ? 'text-yellow-500' : 'text-gray-300'
                    } cursor-pointer`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={() => handleRatingChange(star)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c.314 0 .64.098.908.277l5.878 3.545c1.128.682 1.548 2.232.835 3.418l-1.736 3.02a1 1 0 0 1-.616.554l-4.874 1.956a3 3 0 0 0-1.794 3.899l1.414 4.242c.254.762-.66 1.386-1.312.964l-4.543-2.67a3 3 0 0 0-3.678 0l-4.543 2.67c-.652.382-1.567-.202-1.312-.964l1.414-4.242a3 3 0 0 0-1.794-3.899l-4.874-1.956a1 1 0 0 1-.616-.554L1.214 9.24c-.713-1.186-.293-2.736.835-3.418L8.927 2.277A1.5 1.5 0 0 1 9.82 2h2.36zm0 2h-.025l-5.897 3.558a1.5 1.5 0 0 1-.898.243l-2.966.948 1.968 5.905a1.5 1.5 0 0 1 .45 1.111l-.454 3.362 3.67-1.473a1.5 1.5 0 0 1 1.144 0l3.67 1.473-.454-3.362a1.5 1.5 0 0 1 .45-1.111l1.968-5.905-2.966-.948a1.5 1.5 0 0 1-.898-.243L12.025 4zM12 14a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-center mb-6">
              {rating === 0
                ? 'Please rate our service'
                : `You rated us ${rating} stars. Thank you!`}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => {
                setIsRated(true);
              }}
            >
              Submit Rating
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerRatingPage;
