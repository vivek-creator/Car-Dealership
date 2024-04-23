import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import Footer from '../components/Footer';

 //Import your images and brands
import homePage from '../assets/homePage.jpg';
import brand1 from '../assets/brand1.jpeg';
import brand2 from '../assets/brand2.jpeg';
import brand3 from '../assets/brand3.jpeg';
import brand4 from '../assets/brand4.jpeg';
import brand5 from '../assets/brand5.jpeg';

 //Your styled components here...
 const HalfHeightImage = styled('img')({
  width: '100vw',
  height: '50vh',  
  objectFit: 'cover',  
});

const BrandLogo = styled('img')({
  cursor: 'pointer',
  maxWidth: '100px', 
  maxHeight: '100px',  
  marginBottom: '16px', 
});


const Home = () => {
  const navigate = useNavigate();

  const handleSelectBrand = (brand) => {
    navigate(`/brands/${brand}`);
  };

  const HomePageContainer = styled(Box)({
    backgroundColor: '#f1f1f1', // Background color
  });

  return (
    <div>
      <ResponsiveAppBar />
      <HomePageContainer>
      {/* Add Login and Registration Links */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '10px' }}>
        <Link to="/login"><Button color="inherit">Login</Button></Link>
        <Link to="/registration"><Button color="inherit" >Registration</Button></Link>
      </Box>
      
      <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <HalfHeightImage src={homePage} alt="Car" />
      </Box>
      {/* Rest of your code... */}
      <Box sx={{ height: '28vh', textAlign: 'center', overflow: 'auto' }}>
       
                <Typography variant="h6" gutterBottom>Select a Brand:</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                  <BrandLogo src={brand1} alt="Brand 1" onClick={() => handleSelectBrand('brand1')} />
                  <BrandLogo src={brand2} alt="Brand 2" onClick={() => handleSelectBrand('brand2')} />
                  <BrandLogo src={brand3} alt="Brand 3" onClick={() => handleSelectBrand('brand3')} />
                  <BrandLogo src={brand4} alt="Brand 4" onClick={() => handleSelectBrand('brand4')} />
                  <BrandLogo src={brand5} alt="Brand 5" onClick={() => handleSelectBrand('brand5')} />
                </Box>
              </Box>
              </HomePageContainer>
      <Footer />
    </div>
  );
};

export default Home;


//  import ResponsiveAppBar from '../components/ResponsiveAppBar'; this is ok code 
//  import { Box, Typography, styled } from '@mui/material';
//  import { useNavigate } from 'react-router-dom';
//  import Footer from '../components/Footer';

//   Import your images and brands
//  import image3 from '../assets/image3.jpeg';
//  import brand1 from '../assets/brand1.jpeg';
//  import brand2 from '../assets/brand2.jpeg';
//  import brand3 from '../assets/brand3.jpeg';
//  import brand4 from '../assets/brand4.jpeg';
//  import brand5 from '../assets/brand5.jpeg';


//  const Home = () => {
//    const navigate = useNavigate();
//  console.log(brand1);
//  const handleSelectBrand = (brand) => {
//    navigate(`/brands/${brand}`);
//  };


//    return (
//      <div>
//          <ResponsiveAppBar /> 
//        <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       
//          <HalfHeightImage src={image3} alt="Car" />
//        </Box>
//        <Box sx={{ height: '28vh', textAlign: 'center', overflow: 'auto' }}>
       
//          <Typography variant="h6" gutterBottom>Select a Brand:</Typography>
//          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
//            <BrandLogo src={brand1} alt="Brand 1" onClick={() => handleSelectBrand('brand1')} />
//            <BrandLogo src={brand2} alt="Brand 2" onClick={() => handleSelectBrand('brand2')} />
//            <BrandLogo src={brand3} alt="Brand 3" onClick={() => handleSelectBrand('brand3')} />
//            <BrandLogo src={brand4} alt="Brand 4" onClick={() => handleSelectBrand('brand4')} />
//            <BrandLogo src={brand5} alt="Brand 5" onClick={() => handleSelectBrand('brand5')} />
//          </Box>
//        </Box>
//        <Footer />
//      </div>
//    );
//  };

//  export default Home;

