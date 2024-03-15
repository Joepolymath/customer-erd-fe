import { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';

const ViewAllReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const mockReviews = [
      {
        id: 1,
        userName: 'John Doe',
        rating: 5,
        content: 'Great service, highly recommended!',
        comment: 'I loved the fast delivery!',
      },
      {
        id: 2,
        userName: 'Jane Smith',
        rating: 4,
        content: 'Good experience overall.',
        comment: 'The customer support was helpful.',
      },
      {
        id: 3,
        userName: 'Alice Johnson',
        rating: 3,
        content: 'Average service, could be improved.',
        comment: 'The product quality was okay.',
      },
      {
        id: 4,
        userName: 'Bob Brown',
        rating: 2,
        content: 'Disappointed with the service.',
        comment: 'Delivery took longer than expected.',
      },
      {
        id: 5,
        userName: 'Eva White',
        rating: 1,
        content: 'Terrible experience, would not use again.',
        comment: 'Product arrived damaged.',
      },
    ];

    setReviews(mockReviews);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-4">All Reviews</h1>
        <div className="grid grid-cols-1 gap-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold mr-2">
                    {review.userName}
                  </h3>
                  <span className="text-gray-500">
                    rated {review.rating} stars
                  </span>
                </div>
                <span className="text-gray-500">{review.date}</span>{' '}
                {/* Add date if available */}
              </div>
              <p className="mb-4">{review.content}</p>
              <p className="italic text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllReviewsPage;
