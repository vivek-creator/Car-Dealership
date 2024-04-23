import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
 import Home from './pages/Home';
 import Cars from './pages/Cars';
 import Profile from './pages/Profile';
 import AccountPage from './pages/AccountPage';
 import UserDashboard from './pages/Dashboard/UserDashboard';
 import AdminDashboard from './pages/Dashboard/AdminDashboard';
 import DealershipDashboard from './pages/Dashboard/DealershipDashboard';
 import { routhPath } from './routes/route';
 import TransactionPage from './pages/Transaction';
 import LoginPage from './pages/LoginPage';
 import BrandPage from './pages/brands/brand1';
import Registration from './pages/Registration';
import Success from './components/Success';
import Cancel from './components/Cancel';
import handleBuy from './config/stripeUtils';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhPath.home} element={<Home />} />
       {/*  <Route path={routhPath.cars} element={<Cars />} /> */}
        <Route path={routhPath.login} element={<LoginPage />} />
        <Route path={routhPath.registration} element={<Registration />} />
        <Route path={routhPath.profile} element={<Profile />} />
        <Route path={routhPath.account} element={<AccountPage />} />
        <Route path={`${routhPath.transaction}/:carId`} element={<TransactionPage />} />
        <Route path={routhPath.userDashboard} element={<UserDashboard />} />
        <Route path={routhPath.adminDashboard} element={<AdminDashboard />} />
        <Route path={routhPath.dealershipDashboard} element={<DealershipDashboard />} />
        <Route path={`${routhPath.brands}/:brandId`} element={<BrandPage handleBuy={handleBuy} />} />
        <Route path={routhPath.cars} element={<Cars handleBuy={handleBuy} />} />
       {/* <Route path={`${routhPath.brands}/:brandId`} element={<BrandPage />} /> */}
        <Route path={routhPath.success} element={<Success />} />
        <Route path={routhPath.cancel} element={<Cancel />} />
        
      </Routes>
    </Router>
  );
}

export default App;


 