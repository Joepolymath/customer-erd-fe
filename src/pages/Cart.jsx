import Navbar from '../components/NavBar';

const CartPage = () => {
  // Sample cart data
  const cartItems = [
    { id: 1, name: 'Running Shoe', price: '10', quantity: 2 },
    { id: 2, name: 'Leather Jacket', price: '20', quantity: 1 },
    { id: 3, name: 'Suit', price: '30', quantity: 3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Shopping Cart
        </h1>
        <div className="bg-white shadow-sm rounded-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
