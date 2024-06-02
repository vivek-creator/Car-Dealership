import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';
import { Avatar, Tabs, Tab } from '@mui/material'; // Import Avatar and Tabs from MUI

const UserDashboard = () => {
  const [wishlistCars, setWishlistCars] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false); // State to manage user details visibility

  useEffect(() => {
    // Fetch user data (wishlist and purchase history) when the component mounts
    const fetchUserData = async () => {
      try {
        // Fetch wishlist cars
        const wishlistResponse = await fetch('/api/wishlist/userId'); // Replace 'userId' with the actual user ID
        const wishlistData = await wishlistResponse.json();
        setWishlistCars(wishlistData);

        // Fetch purchase history
        const historyResponse = await fetch('/api/transactions/userId'); // Replace 'userId' with the actual user ID
        const historyData = await historyResponse.json();
        setPurchaseHistory(historyData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  return (
    <div style={{ height: '100%' }}>
      <ResponsiveAppBar />
      <div style={{ display: 'flex', height: '90%' }}>
        {/* Sidebar */}
        <div style={{ flex: 'none', width: '20%', backgroundColor: '#f0f0f0', padding: '20px', height: '100%', overflowY: 'auto' }}>
          {/* Tabs for Wishlist and Purchased Cars */}
          <Tabs orientation="vertical" variant="scrollable">
            <Tab label="Wishlist" />
            <Tab label="Purchased Cars" />
          </Tabs>
        </div>
        {/* Main Content */}
        <div style={{ flex: 'auto', padding: '200px', height: '100%', overflowY: 'auto' }}>
          {/* Display Wishlist Cars */}
          <div>
            {/* <h2>Wishlist Cars</h2> */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {wishlistCars.map((car) => (
                <div key={car.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
                  <img src={car.imageUrl} alt={car.model} style={{ width: '200px', height: '120px' }} />
                  <h3>{car.model}</h3>
                  <p>Price: {car.price}</p>
                  <Link to={`/car/${car.id}`}>View Details</Link>
                </div>
              ))}
            </div>
          </div>
          {/* Display Purchase History */}
          <div>
            {/* <h2>Purchase History</h2> */}
            <ul>
              {purchaseHistory.map((transaction) => (
                <li key={transaction.id}>
                  Car: {transaction.carModel} - Price: {transaction.price} - Date: {transaction.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Avatar */}
        <div style={{ flex: 'none', padding: '20px', height: '100%' }}>
          <Avatar alt="User Photo" style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={toggleUserDetails} />
          {/* Conditionally render user details */}
          {showUserDetails && (
            <div>
              <h4>User Name</h4>
              <p>User Email</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ResponsiveAppBar from '../../components/ResponsiveAppBar';
// import Footer from '../../components/Footer';

// const UserDashboard = () => {
//   // Assume carsData is an array of car objects you might fetch from an API
//   const [carsData, setCarsData] = useState([]);
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     // Fetch cars data and user's transaction history
//     // This is just a placeholder, replace with your actual data fetching logic
//     const fetchCarsAndTransactions = async () => {
//       const carsResponse = await fetch('/api/cars'); // Your API endpoint for cars
//       const carsData = await carsResponse.json();
//       setCarsData(carsData);

//       const transactionsResponse = await fetch('/api/transactions/userId'); // Your API endpoint for user transactions
//       const transactionsData = await transactionsResponse.json();
//       setTransactions(transactionsData);
//     };

//     fetchCarsAndTransactions();
//   }, []);

//   return (
//     <div>
//       <ResponsiveAppBar />
//       <h1>User Dashboard</h1>
//       <div>
//         <h2>Available Cars</h2>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//           {carsData.map((car) => (
//             <div key={car.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
//               <img src={car.imageUrl} alt={car.model} style={{ width: '200px', height: '120px' }} />
//               <h3>{car.model}</h3>
//               <p>Price: {car.price}</p>
//               <Link to={`/car/${car.id}`}>View Details</Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h2>My Transactions</h2>
//         <ul>
//           {transactions.map((transaction) => (
//             <li key={transaction.id}>
//               Car: {transaction.carModel} - Price: {transaction.price} - Date: {transaction.date}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserDashboard;



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
