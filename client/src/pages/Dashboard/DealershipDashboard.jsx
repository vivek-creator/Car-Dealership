import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';

const DealershipDashboard = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Dealership Dashboard</h1>
      {/* Dealership-specific dashboard content goes here */}
      <Footer />
    </div>
  );
};

export default DealershipDashboard;
