import React, { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Footer from '../components/Footer';
import { addUser } from '../services/api';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addUser(user);
  }
  const handleNavigateToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    
    <Container>
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
        <Button variant="text" onClick={handleNavigateToLogin}>Already Registered?  Login Here </Button>
      </FormControl>
      <Footer />
    </Container>
    
  );
};

export default Registration;
