import React from 'react';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from '../components/Footer';
import handleBuy from '../config/stripeUtils';
//import { loadStripe } from '@stripe/stripe-js';
//import { transaction } from "../services/api";

import AUDI1 from '../assets/AUDI1.jpeg';
import AUDI2 from '../assets/AUDI2.jpeg';
import AUDI3 from '../assets/AUDI3.jpeg';
import AUDI4 from '../assets/AUDI4.jpeg';
import AUDI5 from '../assets/AUDI5.jpeg';
import GT1 from  '../assets/GT1.jpeg';
import GT2 from '../assets/GT2.jpeg';
import GT3 from '../assets/GT3.jpeg';
import GT4 from '../assets/GT4.jpeg';
import GT5 from '../assets/GT5.jpeg';
import BMW1 from '../assets/BMW1.jpeg';
import BMW2 from '../assets/BMW2.jpeg';
import BMW3 from '../assets/BMW3.jpeg';
import BMW4 from '../assets/BMW4.jpeg';
import BMW5 from '../assets/BMW5.jpeg';
import RR1 from '../assets/RR1.jpeg';
import RR2 from '../assets/RR2.jpeg';
import RR3 from '../assets/RR3.jpeg';
import RR4 from '../assets/RR4.jpeg';
import RR5 from '../assets/RR5.jpeg';
import Mercedes1 from '../assets/Mercedes1.jpeg';
import Mercedes2 from '../assets/Mercedes2.jpeg';
import Mercedes3 from '../assets/Mercedes3.jpeg';
import Mercedes4 from '../assets/Mercedes4.jpeg';
import Mercedes5 from '../assets/Mercedes5.jpeg';
// import { transaction } from "../services/api";

const carsData = [
   
    { id: 'car1', imageUrl: BMW1, price: '20,000 INR' },
    { id: 'car2', imageUrl: BMW2, price: '25,000 INR' },
    { id: 'car3', imageUrl: BMW3, price: '30,000 INR' },
    { id: 'car4', imageUrl: BMW4, price: '35,000 INR' },
    { id: 'car5', imageUrl: BMW5, price: '40,000 INR' },
    { id: 'car1', imageUrl: GT1, price: '20,000 INR' },
    { id: 'car2', imageUrl: GT2, price: '25,000 INR' },
    { id: 'car3', imageUrl: GT3, price: '30,000 INR' },
    { id: 'car4', imageUrl: GT4, price: '35,000 INR' },
    { id: 'car5', imageUrl: GT5, price: '40,000 INR' },
    { id: 'car1', imageUrl: Mercedes1, price: '20,000 INR' },
    { id: 'car2', imageUrl: Mercedes2, price: '25,000 INR' },
    { id: 'car3', imageUrl: Mercedes3, price: '30,000 INR' },
    { id: 'car4', imageUrl: Mercedes4, price: '35,000 INR' },
    { id: 'car5', imageUrl: Mercedes5, price: '40,000 INR' },
    { id: 'car1', imageUrl: AUDI1, price: '20,000 INR' },
    { id: 'car2', imageUrl: AUDI2, price: '25,000 INR' },
    { id: 'car3', imageUrl: AUDI3, price: '30,000 INR' },
    { id: 'car4', imageUrl: AUDI4, price: '35,000 INR' },
    { id: 'car5', imageUrl: AUDI5, price: '40,000 INR' }, 
    { id: 'car1', imageUrl: RR1, price: '20,000 INR' },
    { id: 'car2', imageUrl: RR2, price: '25,000 INR' },
    { id: 'car3', imageUrl: RR3, price: '30,000 INR' },
    { id: 'car4', imageUrl: RR4, price: '35,000 INR' },
    { id: 'car5', imageUrl: RR5, price: '40,000 INR' },
  ];


  const Cars = () => {
 
  return (
    <div> 
      <ResponsiveAppBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {carsData.map((car) => (
          <div key={car.id} style={{ margin: '20px', textAlign: 'center' }}>
            <img src={car.imageUrl} alt={car.name} style={{ width: '200px', height: 'auto' }} />
            <p>{car.name} Price: {car.price}</p>
            <button onClick={() => handleBuy(car)}>Buy</button> {/* Call handleBuy on button click */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cars;


// import React from 'react';// okk code 
// import ResponsiveAppBar from "../components/ResponsiveAppBar";
// import Footer from '../components/Footer';
// import { loadStripe } from '@stripe/stripe-js';
// //import { transaction } from "../services/api";

// import AUDI1 from '../assets/AUDI1.jpeg';
// import AUDI2 from '../assets/AUDI2.jpeg';
// import AUDI3 from '../assets/AUDI3.jpeg';
// import AUDI4 from '../assets/AUDI4.jpeg';
// import AUDI5 from '../assets/AUDI5.jpeg';
// import GT1 from  '../assets/GT1.jpeg';
// import GT2 from '../assets/GT2.jpeg';
// import GT3 from '../assets/GT3.jpeg';
// import GT4 from '../assets/GT4.jpeg';
// import GT5 from '../assets/GT5.jpeg';
// import BMW1 from '../assets/BMW1.jpeg';
// import BMW2 from '../assets/BMW2.jpeg';
// import BMW3 from '../assets/BMW3.jpeg';
// import BMW4 from '../assets/BMW4.jpeg';
// import BMW5 from '../assets/BMW5.jpeg';
// import RR1 from '../assets/RR1.jpeg';
// import RR2 from '../assets/RR2.jpeg';
// import RR3 from '../assets/RR3.jpeg';
// import RR4 from '../assets/RR4.jpeg';
// import RR5 from '../assets/RR5.jpeg';
// import Mercedes1 from '../assets/Mercedes1.jpeg';
// import Mercedes2 from '../assets/Mercedes2.jpeg';
// import Mercedes3 from '../assets/Mercedes3.jpeg';
// import Mercedes4 from '../assets/Mercedes4.jpeg';
// import Mercedes5 from '../assets/Mercedes5.jpeg';
// // import { transaction } from "../services/api";

// const carsData = [
   
//     { id: 'car1', imageUrl: BMW1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: BMW2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: BMW3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: BMW4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: BMW5, price: '40,000 INR' },
//     { id: 'car1', imageUrl: GT1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: GT2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: GT3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: GT4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: GT5, price: '40,000 INR' },
//     { id: 'car1', imageUrl: Mercedes1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: Mercedes2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: Mercedes3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: Mercedes4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: Mercedes5, price: '40,000 INR' },
//     { id: 'car1', imageUrl: AUDI1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: AUDI2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: AUDI3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: AUDI4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: AUDI5, price: '40,000 INR' }, 
//     { id: 'car1', imageUrl: RR1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: RR2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: RR3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: RR4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: RR5, price: '40,000 INR' },
//   ];


// const Cars = () => {
//   const stripePromise = loadStripe("pk_test_51P81IzSCwAOVcn2NCAtzebuBSOONzPEviD5190jKHDrIC2U3fb8oVauQ7yIUTDRTy9z8glEzhEfm9BDZi9DVthvh00c9jh2o9M");

//   const handleBuy = async (car) => {
//     try {
//       const stripe = await stripePromise;
  
//       const response = await fetch("http://localhost:8080/api/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ car: car }) // Send a single car object
//       });
      
//       const session = await response.json();
  
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.sessionId
//       });
  
//       if (result.error) {
//         console.log(result.error);
//       } else {
//         console.log("Redirecting to checkout page...");
//       }
  
//     } catch (error) {
//       console.error('Network or server error:', error);
//     }
//   };
  
//   return (
//     <div> 
//       <ResponsiveAppBar />
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {carsData.map((car) => (
//           <div key={car.id} style={{ margin: '20px', textAlign: 'center' }}>
//             <img src={car.imageUrl} alt={car.name} style={{ width: '200px', height: 'auto' }} />
//             <p>{car.name} Price: {car.price}</p>
//             <button onClick={() => handleBuy(car)}>Buy</button>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Cars;


// import React from 'react';
// import ResponsiveAppBar from "../components/ResponsiveAppBar";
// import Footer from '../components/Footer';
// import { loadStripe } from '@stripe/stripe-js';


// const Cars = () => {
//   const stripePromise = loadStripe("pk_test_51P81IzSCwAOVcn2NCAtzebuBSOONzPEviD5190jKHDrIC2U3fb8oVauQ7yIUTDRTy9z8glEzhEfm9BDZi9DVthvh00c9jh2o9M");
  
//   const handleBuy = async (car) => {
//     try {
//       const stripe = await stripePromise;

//       const response = await fetch("http://localhost:8080/api/create-checkout-session", {

//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ product: car })
//       });
      
//       const session = await response.json();

//       const result = await stripe.redirectToCheckout({
//         sessionId: session.sessionId
//       });

//       if (result.error) {
//         console.log(result.error);
//       } else {
//         console.log("Redirecting to checkout page...");
//       }

//     } catch (error) {
//       console.error('Network or server error:', error);
//     }
//   };

//   return (
//     <div> 
//       <ResponsiveAppBar />
//              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//              {carsData.map((car) => (
//              <div key={car.id} style={{ margin: '20px', textAlign: 'center' }}>
//              <img src={car.imageUrl} alt={car.name} style={{ width: '200px', height: 'auto' }} />
//              <p>{car.name} Price: {car.price}</p>
//              <button onClick={() => handleBuy(car)}>Buy</button>
//            </div>
//          ))}
//          </div>
//       <Footer />
//     </div>
//   );
// }

// export default Cars;

// import React from 'react';
// import ResponsiveAppBar from "../components/ResponsiveAppBar";
// import Footer from '../components/Footer';
// import { loadStripe } from '@stripe/stripe-js';

// const Cars = () => {
//   const stripePromise = loadStripe("pk_test_51P81IzSCwAOVcn2NCAtzebuBSOONzPEviD5190jKHDrIC2U3fb8oVauQ7yIUTDRTy9z8glEzhEfm9BDZi9DVthvh00c9jh2o9M");
  
//   const handleBuy = async (car) => {
//     try {
//       const stripe = await stripePromise;

//       const response = await fetch("http://localhost:8080/api/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ product: car })
//       });
      
//       const session = await response.json();

//       const result = await stripe.redirectToCheckout({
//         sessionId: session.sessionId
//       });

//       if (result.error) {
//         console.log(result.error);
//       } else {
//         console.log("Redirecting to checkout page...");
//       }

//     } catch (error) {
//       console.error('Network or server error:', error);
//     }
//   };

//   return (
//     <div>
//       <ResponsiveAppBar />
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {/* Render cars here */}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Cars;


// import ResponsiveAppBar from "../components/ResponsiveAppBar";
// import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';

// import AUDI1 from '../assets/AUDI1.jpeg';
// import AUDI2 from '../assets/AUDI2.jpeg';
// import AUDI3 from '../assets/AUDI3.jpeg';
// import AUDI4 from '../assets/AUDI4.jpeg';
// import AUDI5 from '../assets/AUDI5.jpeg';
// import GT1 from  '../assets/GT1.jpeg';
// import GT2 from '../assets/GT2.jpeg';
// import GT3 from '../assets/GT3.jpeg';
// import GT4 from '../assets/GT4.jpeg';
// import GT5 from '../assets/GT5.jpeg';
// import BMW1 from '../assets/BMW1.jpeg';
// import BMW2 from '../assets/BMW2.jpeg';
// import BMW3 from '../assets/BMW3.jpeg';
// import BMW4 from '../assets/BMW4.jpeg';
// import BMW5 from '../assets/BMW5.jpeg';
// import RR1 from '../assets/RR1.jpeg';
// import RR2 from '../assets/RR2.jpeg';
// import RR3 from '../assets/RR3.jpeg';
// import RR4 from '../assets/RR4.jpeg';
// import RR5 from '../assets/RR5.jpeg';
// import Mercedes1 from '../assets/Mercedes1.jpeg';
// import Mercedes2 from '../assets/Mercedes2.jpeg';
// import Mercedes3 from '../assets/Mercedes3.jpeg';
// import Mercedes4 from '../assets/Mercedes4.jpeg';
// import Mercedes5 from '../assets/Mercedes5.jpeg';
// // import { transaction } from "../services/api";

// const carsData = [
   
//     { id: 'car1', imageUrl: BMW1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: BMW2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: BMW3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: BMW4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: BMW5, price: '40,000 INR' },
//     { id: 'car1', imageUrl: GT1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: GT2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: GT3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: GT4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: GT5, price: '40,000 INR' },
//     { id: 'car1', imageUrl: Mercedes1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: Mercedes2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: Mercedes3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: Mercedes4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: Mercedes5, price: '40,000 INR' },
//     { id: 'car1', imageUrl: AUDI1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: AUDI2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: AUDI3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: AUDI4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: AUDI5, price: '40,000 INR' }, 
//     { id: 'car1', imageUrl: RR1, price: '20,000 INR' },
//     { id: 'car2', imageUrl: RR2, price: '25,000 INR' },
//     { id: 'car3', imageUrl: RR3, price: '30,000 INR' },
//     { id: 'car4', imageUrl: RR4, price: '35,000 INR' },
//     { id: 'car5', imageUrl: RR5, price: '40,000 INR' },
//   ];

// const Cars =() => {
//   // const navigate = useNavigate(); // Initialize useNavigate

//   const stripePromise = loadStripe("pk_test_51P81IzSCwAOVcn2NCAtzebuBSOONzPEviD5190jKHDrIC2U3fb8oVauQ7yIUTDRTy9z8glEzhEfm9BDZi9DVthvh00c9jh2o9M");
//   const handleBuy = async (cars) => {
//     try {
//       const stripe = await stripePromise;

//       const body ={
//         product: cars
//       }
//       const headers ={
//         "Content-Type": "application/json"
//       }

//       const response = await fetch("http://localhost:8080/api/create-checkout-sessions",{
//         method:"POST",
//         headers: headers,
//         body:JSON.stringify(body)
//       });
//       const session = await response.json();
//       const result = stripe.redirectToCheckout({
//         sessionId:session.id
//       });

//       if(result.error){
//         console.log(result.error);
//       } else {
//         console.log(result.success);
//       }

//       // if (response.status === 200) {
//       //   navigate('/dashboard'); // Navigate to dashboard if login is successful
//       // } else {
//       //   // Handle errors or unsuccessful login attempts here
//       //   console.error('Trabsactions failed:', result.error);
//       // }
//     } catch (error) {
//       console.error('Network or server error:', error);
//     }
//     // navigate(`/transaction/${carId}`);
//   };
//     return (
//          <div>
//             <ResponsiveAppBar />
//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//            {carsData.map((car) => (
//           <div key={car.id} style={{ margin: '20px', textAlign: 'center' }}>
//             <img src={car.imageUrl} alt={car.name} style={{ width: '200px', height: 'auto' }} />
//             <p>{car.name} Price: {car.price}</p>
//             <button onClick={() => handleBuy(car)}>Buy</button>
//           </div>
//         ))}
//         </div>
//             <Footer />
//         </div>
       
//     )
// }
// export default Cars;