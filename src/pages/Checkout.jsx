import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const Checkout = () => {
  const navigate = useNavigate();
  const [voucherCode, setVoucherCode] = useState('');
  const cartsState = useSelector((state) => state.carts);
  const [totalAmount, setTotalAmount] = useState(cartsState.total); // Initial total amount
  const [voucherApplied, setVoucherApplied] = useState(false);

  const applyVoucher = () => {
    // Simulating voucher validation and discount
    if (voucherCode === 'SAVE10') {
      if (!voucherApplied) {
        setTotalAmount(Number(totalAmount * 0.9).toFixed(2)); // Applying 10% discount
        setVoucherApplied(true);
      } else {
        toast('Voucher Applied Already', { position: 'top-center' });
      }
    } else {
      toast('Invalid voucher code. Please try again.', {
        position: 'top-center',
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <div className="mb-4">
              <label
                htmlFor="voucher"
                className="block text-sm font-medium text-gray-700"
              >
                Voucher code
              </label>
              <input
                type="text"
                id="voucher"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter voucher code for 10% off"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
              />
            </div>
            <button
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={applyVoucher}
            >
              Apply Voucher
            </button>
            <div className="mt-4">
              <p className="text-lg font-semibold">
                Total Amount: ${totalAmount}
              </p>
            </div>
            <div className="mt-6">
              <button
                className="w-full inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  toast('Payment Successful');
                  navigate('/rating');
                }}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
