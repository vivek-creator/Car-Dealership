import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
//import Footer from '../components/Footer';
//import ResponsiveAppBar from '../components/ResponsiveAppBar';


const AccountPage = () => {
  const [accountType, setAccountType] = useState('');
  const navigate = useNavigate(); // Step 2: Initialize useNavigate

  // Step 3: Update the function to navigate based on account type
  const handleSelectAccountType = (type) => {
    setAccountType(type); 
    // Example navigation, adjust the paths as needed for your app
    if (type === 'User') {
      navigate('/user-dashboard');
    } else if (type === 'Admin') {
      navigate('/admin-dashboard');
    } else if (type === 'Dealership') {
      navigate('/dealership-dashboard');
    }
  }

  return (
    <div>
      {/* <ResponsiveAppBar /> */}
      <h1>Select Account Type</h1>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button style={{ margin: '10px' }} onClick={() => handleSelectAccountType('User')}>User</button>
        <button style={{ margin: '10px' }} onClick={() => handleSelectAccountType('Admin')}>Admin</button>
        <button style={{ margin: '10px' }} onClick={() => handleSelectAccountType('Dealership')}>Dealership</button>
      </div>
      {accountType && <p>Selected Account Type: {accountType}</p>}
      {/* <Footer /> */}
    </div>
  );
}

export default AccountPage;






 
//   const handleSelectAccountType = (type) => {
//     setAccountType(type); 
//   }
//   return (
//     <div>
//       <ResponsiveAppBar />
//       <h1>Select Account Type</h1>
//       <div>
//         <button>User</button>
//         <button>Admin</button>
//         <button>Dealership</button>
//       </div>
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <button style={{ margin: '10px' }} onClick={() => handleSelectAccountType('User')}>User</button>
//         <button style={{ margin: '10px' }} onClick={() => handleSelectAccountType('Admin')}>Admin</button>
//         <button style={{ margin: '10px' }} onClick={() => handleSelectAccountType('Dealership')}>Dealership</button>
//       </div>
//       {accountType && <p>Selected Account Type: {accountType}</p>}
//       <Footer />
//     </div>
//   );
// }
//   export default AccountPage;