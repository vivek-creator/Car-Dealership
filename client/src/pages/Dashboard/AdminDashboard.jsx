import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';

const AdminDashboard = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Admin Dashboard</h1>
      {/* Admin-specific dashboard content goes here */}
      <Footer />
    </div>
  );
};

export default AdminDashboard;
