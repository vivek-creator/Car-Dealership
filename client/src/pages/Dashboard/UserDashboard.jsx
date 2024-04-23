import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';

const UserDashboard = () => {
  // Assume carsData is an array of car objects you might fetch from an API
  const [carsData, setCarsData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch cars data and user's transaction history
    // This is just a placeholder, replace with your actual data fetching logic
    const fetchCarsAndTransactions = async () => {
      const carsResponse = await fetch('/api/cars'); // Your API endpoint for cars
      const carsData = await carsResponse.json();
      setCarsData(carsData);

      const transactionsResponse = await fetch('/api/transactions/userId'); // Your API endpoint for user transactions
      const transactionsData = await transactionsResponse.json();
      setTransactions(transactionsData);
    };

    fetchCarsAndTransactions();
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
      <h1>User Dashboard</h1>
      <div>
        <h2>Available Cars</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {carsData.map((car) => (
            <div key={car.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
              <img src={car.imageUrl} alt={car.model} style={{ width: '200px', height: '120px' }} />
              <h3>{car.model}</h3>
              <p>Price: {car.price}</p>
              <Link to={`/car/${car.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>My Transactions</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              Car: {transaction.carModel} - Price: {transaction.price} - Date: {transaction.date}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;



// import React from 'react';
// import ResponsiveAppBar from '../../components/ResponsiveAppBar';
// import Footer from '../../components/Footer';

// const UserDashboard = () => {
//   return (
//     <div>
//       <ResponsiveAppBar />
//       <h1>User Dashboard</h1>
//       {/* User-specific dashboard content goes here */}
//       <Footer />
//     </div>
//   );
// };

// export default UserDashboard;
