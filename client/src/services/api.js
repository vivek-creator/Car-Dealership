import axios from 'axios';

const URL = "http://localhost:8080";

export const addUser = async (data)=> {
  try {
    return await axios.post(`${URL}/add`,data);
  } catch (error) {
    console.log('Error while calling add User API', error);
  }
}
 
export const loginDetails = async (data)=> {
  try {
    return await axios.post(`${URL}/login`,data);
  } catch (error) {
    console.log('Error while calling login User API', error);
  }
}

const handleBuy = async (car) => {
  try {
    // Stripe checkout code...

    // After payment success
    await transaction({ car, amount: car.price });
    console.log("Transaction logged successfully!");

  } catch (error) {
    console.error('Network or server error:', error);
  }
};
