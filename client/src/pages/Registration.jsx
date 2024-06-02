import React, { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Footer from '../components/Footer';
import { addUser } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const Registration = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleNavigateToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(user.password)) {
      toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character.');
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      const response = await addUser(user);
      if (response.status === 201) {
        toast.success('Registration Successful'); // Display success message
        navigate('/login');
      } else {
        toast.error('Registration failed. Please try again.'); // Display error message
        console.error('Registration failed:', response.data);
      }
    } catch (error) {
      console.error('Network or server error:', error);
      toast.error('Network or server error. Please try again later.'); // Display error message
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Typography variant="h4">Registration</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input onChange={onValueChange} name="password" type="password" />
      </FormControl>
      <FormControl>
        <InputLabel>Confirm Password</InputLabel>
        <Input onChange={onValueChange} name="confirmPassword" type="password" />
      </FormControl>
      <FormControl>
        <InputLabel>Mobile No.</InputLabel>
        <Input onChange={onValueChange} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={handleSubmit}>Register</Button>
      </FormControl>
      <FormControl>
        <Button variant="text" onClick={handleNavigateToLogin}>Already Registered? Login Here</Button>
      </FormControl>
      <Footer />
    </Container>
  );
};

export default Registration;


// import React, { useState } from 'react'; ok code
// import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Footer from '../components/Footer';
// import { addUser } from '../services/api';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Container = styled(FormGroup)`
//   width: 50%;
//   margin: 5% auto 0 auto;
//   & > div {
//     margin-top: 20px;
//   }
// `;

// const Registration = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phone: '',
//   });

//   const onValueChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   await addUser(user);
//   // }
//   const handleNavigateToLogin = () => {
//     navigate('/login'); // Navigate to the login page
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await addUser(user);
//       if (response.status === 201) {
//         toast.success('Login Successful'); // Display success message
//         navigate('/login');
//       } else {
//         toast.error('Invalid credentials. Please try again.'); // Display error message
//         console.error('Login failed:', response.data);
//       }
//     } catch (error) {
//       console.error('Network or server error:', error);
//       toast.error('Network or server error. Please try again later.'); // Display error message
//     }
//   }

//   return (
    
//     <Container>
//       <ToastContainer />
//       <Typography variant="h4">Registration</Typography>
//       <FormControl>
//         <InputLabel>Name</InputLabel>
//         <Input onChange={onValueChange} name="name" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Email</InputLabel>
//         <Input onChange={onValueChange} name="email" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Password</InputLabel>
//         <Input onChange={onValueChange} name="password" type="password" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Confirm Password</InputLabel>
//         <Input onChange={onValueChange} name="confirmPassword" type="password" />
//       </FormControl>
//       <FormControl>
//         <InputLabel>Mobile No.</InputLabel>
//         <Input onChange={onValueChange} name="phone" />
//       </FormControl>
//       <FormControl>
//         <Button variant="contained" onClick={handleSubmit}>Register</Button>
//       </FormControl>
//       <FormControl>
//         <Button variant="text" onClick={handleNavigateToLogin}>Already Registered?  Login Here </Button>
//       </FormControl>
//       <Footer />
//     </Container>
    
//   );
// };

// export default Registration;
