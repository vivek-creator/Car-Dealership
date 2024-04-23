import React from 'react';
import { useParams } from 'react-router-dom';
//import { loadStripe } from '@stripe/stripe-js';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';
import handleBuy from '../../config/stripeUtils';

import AUDI1 from '../../assets/AUDI1.jpeg';
import AUDI2 from '../../assets/AUDI2.jpeg';
import AUDI3 from '../../assets/AUDI3.jpeg';
import AUDI4 from '../../assets/AUDI4.jpeg';
import AUDI5 from '../../assets/AUDI5.jpeg';
import GT1 from  '../../assets/GT1.jpeg';
import GT2 from '../../assets/GT2.jpeg';
import GT3 from '../../assets/GT3.jpeg';
import GT4 from '../../assets/GT4.jpeg';
import GT5 from '../../assets/GT5.jpeg';
import BMW1 from '../../assets/BMW1.jpeg';
import BMW2 from '../../assets/BMW2.jpeg';
import BMW3 from '../../assets/BMW3.jpeg';
import BMW4 from '../../assets/BMW4.jpeg';
import BMW5 from '../../assets/BMW5.jpeg';
import RR1 from '../../assets/RR1.jpeg';
import RR2 from '../../assets/RR2.jpeg';
import RR3 from '../../assets/RR3.jpeg';
import RR4 from '../../assets/RR4.jpeg';
import RR5 from '../../assets/RR5.jpeg';
import Mercedes1 from '../../assets/Mercedes1.jpeg';
import Mercedes2 from '../../assets/Mercedes2.jpeg';
import Mercedes3 from '../../assets/Mercedes3.jpeg';
import Mercedes4 from '../../assets/Mercedes4.jpeg';
import Mercedes5 from '../../assets/Mercedes5.jpeg';

const BrandPage = ({ handleBuy }) => {
 
  const { brandId } = useParams();

  const brandsData = [
    {
      id: 'brand1',
      name: 'GT',
      description: 'GT stands for grand tourer or gran tourer, a type of car thats designed with both long-distance driving and high speeds in mind. These vehicles typically combine luxury and performance attributes, more often than not featuring a 2+2 seating configuration.',
      cars: [
        { id: 'car1', imageUrl: GT1, price: '20,000 USD' },
        { id: 'car2', imageUrl: GT2, price: '25,000 USD' },
        { id: 'car3', imageUrl: GT3, price: '30,000 USD' },
        { id: 'car4', imageUrl: GT4, price: '35,000 USD' },
        { id: 'car5', imageUrl: GT5, price: '40,000 USD' },
      ],
    },
    // Add other brands as needed

  {
    id: 'brand2',
    name: 'Mercedes',
    description: 'With Mercedes-Benz AG, we are one of the leading global suppliers of high-end passenger cars and premium vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.',
  
    cars: [
        { id: 'car1', imageUrl: Mercedes1, price: '20,000 USD' },
        { id: 'car2', imageUrl: Mercedes2, price: '25,000 USD' },
        { id: 'car3', imageUrl: Mercedes3, price: '30,000 USD' },
        { id: 'car4', imageUrl: Mercedes4, price: '35,000 USD' },
        { id: 'car5', imageUrl: Mercedes5, price: '40,000 USD' },
      ],
  },
{
    id: 'brand3',
    name: 'BMW',
    description: 'The BMW Group is the worlds leading provider of premium cars and motorcycles and the home of the BMW, MINI, Rolls-Royce and BMW Motorrad brands. Our vehicles and products are tailored to the needs of our customers and constantly enhanced – with a clear focus on sustainability and the conservation of resources.',
  
    cars: [
        { id: 'car1', imageUrl: BMW1, price: '20,000 USD' },
        { id: 'car2', imageUrl: BMW2, price: '25,000 USD' },
        { id: 'car3', imageUrl: BMW3, price: '30,000 USD' },
        { id: 'car4', imageUrl: BMW4, price: '35,000 USD' },
        { id: 'car5', imageUrl: BMW5, price: '40,000 USD' },
      ],
  },
  {
    id: 'brand4',
    name: 'AUDI',
    description: 'AUDI AG is a German company that produces cars under the Audi brand. It is part of the Volkswagen Group. The name Audi is based on a Latin translation of the surname of the founder August Horch, itself the German word for “listen!" Audi is headquartered in Ingolstadt, Germany.',
    // Add more brand-specific information here
    cars: [
        { id: 'car1', imageUrl: AUDI1, price: '20,000 USD' },
        { id: 'car2', imageUrl: AUDI2, price: '25,000 USD' },
        { id: 'car3', imageUrl: AUDI3, price: '30,000 USD' },
        { id: 'car4', imageUrl: AUDI4, price: '35,000 USD' },
        { id: 'car5', imageUrl: AUDI5, price: '40,000 USD' },
      ],
  },
  {
    id: 'brand5',
    name: 'Rolls Royce',
    description: 'Rolls-Royce Motor Cars Limited is a British luxury automobile maker that has operated as a wholly owned subsidiary of BMW AG since 2003 – as the exclusive manufacturer of Rolls-Royce-branded motor cars.',
    
    cars: [
        { id: 'car1', imageUrl: RR1, price: '20,000 USD' },
        { id: 'car2', imageUrl: RR2, price: '25,000 USD' },
        { id: 'car3', imageUrl: RR3, price: '30,000 USD' },
        { id: 'car4', imageUrl: RR4, price: '35,000 USD' },
        { id: 'car5', imageUrl: RR5, price: '40,000 USD' },
      ],
  },
  ];
  const brand = brandsData.find(b => b.id === brandId);

  if (!brand) {
    return <div>Brand not found</div>;
  }
 
  return (
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , marginTop: '20'}}>
      <ResponsiveAppBar />
      <h1>{brand.name}</h1>
      <p>{brand.description}</p>
      {brand.cars.map((car) => (
        <div key={car.id}>
          <img src={car.imageUrl} alt={`Car ${car.id}`} style={{ marginTop: '10px', width: '400px' , height: '200px' , display : 'flex' , color:'inherit', flexDirection : 'row'}} />
          <p>Price: {car.price}</p>
          <button onClick={() => handleBuy(car)}>Buy</button> {/* Call handleBuy on button click */}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default BrandPage;


// // import React from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import ResponsiveAppBar from '../../components/ResponsiveAppBar';
// // import Footer from '../../components/Footer';

// // import AUDI1 from '../../assets/AUDI1.jpeg';
// // import AUDI2 from '../../assets/AUDI2.jpeg';
// // import AUDI3 from '../../assets/AUDI3.jpeg';
// // import AUDI4 from '../../assets/AUDI4.jpeg';
// // import AUDI5 from '../../assets/AUDI5.jpeg';
// // import GT1 from  '../../assets/GT1.jpeg';
// // import GT2 from '../../assets/GT2.jpeg';
// // import GT3 from '../../assets/GT3.jpeg';
// // import GT4 from '../../assets/GT4.jpeg';
// // import GT5 from '../../assets/GT5.jpeg';
// // import BMW1 from '../../assets/BMW1.jpeg';
// // import BMW2 from '../../assets/BMW2.jpeg';
// // import BMW3 from '../../assets/BMW3.jpeg';
// // import BMW4 from '../../assets/BMW4.jpeg';
// // import BMW5 from '../../assets/BMW5.jpeg';
// // import RR1 from '../../assets/RR1.jpeg';
// // import RR2 from '../../assets/RR2.jpeg';
// // import RR3 from '../../assets/RR3.jpeg';
// // import RR4 from '../../assets/RR4.jpeg';
// // import RR5 from '../../assets/RR5.jpeg';
// // import Mercedes1 from '../../assets/Mercedes1.jpeg';
// // import Mercedes2 from '../../assets/Mercedes2.jpeg';
// // import Mercedes3 from '../../assets/Mercedes3.jpeg';
// // import Mercedes4 from '../../assets/Mercedes4.jpeg';
// // import Mercedes5 from '../../assets/Mercedes5.jpeg';

// // const BrandPage = () => {

// //   const stripePromise = loadStripe("pk_test_51P81IzSCwAOVcn2NCAtzebuBSOONzPEviD5190jKHDrIC2U3fb8oVauQ7yIUTDRTy9z8glEzhEfm9BDZi9DVthvh00c9jh2o9M");

// //   const handleBuy = async (car) => {
// //     try {
// //       const stripe = await stripePromise;
  
// //       const response = await fetch("http://localhost:8080/api/create-checkout-session", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify({ car: car }) // Send a single car object
// //       });
      
// //       const session = await response.json();
  
// //       const result = await stripe.redirectToCheckout({
// //         sessionId: session.sessionId
// //       });
  
// //       if (result.error) {
// //         console.log(result.error);
// //       } else {
// //         console.log("Redirecting to checkout page...");
// //       }
  
// //     } catch (error) {
// //       console.error('Network or server error:', error);
// //     }
  
// // const { brandName } = useParams();
// // const navigate = useNavigate();
// // const handleBuy = (carId) => {
// // navigate(`/transaction/${carId}`);
// //   };
// //        const brandsData = [
       
// //       ];
  
// //   const { brandId } = useParams();
// //   const brand = brandsData.find(b => b.id === brandId);

// //   if (!brand) {
// //     return <div>Brand not found</div>;
// //   }
    
// //   return (
// //     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , marginTop: '20'}}>
// //         <ResponsiveAppBar />
// //       <h1>{brand.name}</h1>
// //       <p>{brand.description}</p>
// //       {brand.cars.map((car) => (
// //         <div key={car.id}>
// //           <img src={car.imageUrl} alt={`Car ${car.id}`} style={{ marginTop: '10px', width: '400px' , height: '200px' 
// //           ,display : 'flex' , color:'inherit', flexDirection : 'row'}} />
// //           <p>Price: {car.price}</p>
// //           <button onClick={() => handleBuy(car)}>Buy</button>
// //         </div>
// //       ))}
// //        <Footer />
// //     </div>
// //   );
// // };
// // };
// // export default BrandPage;


