import Navbar from '../components/NavBar';

const Orders = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Your Orders</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delivery Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Product 1</td>
              <td className="px-6 py-4 whitespace-nowrap">$10.00</td>
              <td className="px-6 py-4 whitespace-nowrap">2022-01-01</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Product 2</td>
              <td className="px-6 py-4 whitespace-nowrap">$20.00</td>
              <td className="px-6 py-4 whitespace-nowrap">2022-01-15</td>
            </tr>
            {/* Add more rows for additional products */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
