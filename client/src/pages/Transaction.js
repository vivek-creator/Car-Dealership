import React, { useState } from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText, TextField, Button, Box } from '@mui/material';

const TransactionPage = () => {
    const [cardDetails, setCardDetails] = useState({
        email: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        cardName: '',
    });

    const handleChange = (e) => {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    };
    
    const handlePayment = () => {
        // Payment processing logic goes here
        console.log(cardDetails);
    };

    // Dummy data for the items in the cart
    const items = [
        { name: 'Quantum X Pro', qty: 2, price: '$1,129.89' },
        { name: 'Fusion Flex Trainer', qty: 2, price: '$99.99' },
        { name: 'Stealth Runner Pro', qty: 1, price: '$89.99' },
    ];

    // Calculate the total price
    const totalPrice = items.reduce((acc, item) => acc + item.qty * parseFloat(item.price.slice(1)), 0);

    return (
        <Container component="main" maxWidth="md">
            <Box display="flex" justifyContent="space-between" marginTop={4}>
                <Paper elevation={3} style={{ padding: '20px', width: '60%' }}>
                    <Typography variant="h6">Your Cart</Typography>
                    <List>
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.name} secondary={`Qty: ${item.qty}`} />
                                <Typography variant="body2">{item.price}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h5" align="right">
                        Total: ${totalPrice.toFixed(2)}
                    </Typography>
                </Paper>

                <Paper elevation={3} style={{ padding: '20px', width: '35%' }}>
                    <Typography variant="h6" gutterBottom>Payment Details</Typography>
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={cardDetails.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Card Number"
                        name="cardNumber"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={cardDetails.cardNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Expiry Date (MM/YY)"
                        name="expiry"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={cardDetails.expiry}
                        onChange={handleChange}
                    />
                    <TextField
                        label="CVV"
                        name="cvv"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={cardDetails.cvv}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Cardholder Name"
                        name="cardName"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={cardDetails.cardName}
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handlePayment}
                        style={{ marginTop: '20px' }}
                    >
                        Pay ${totalPrice.toFixed(2)}
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default TransactionPage;



// import React, { useState } from 'react';
// import { transaction } from '../services/api';
// import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';

// const Container = styled(FormGroup)`
//   width: 50%;
//   margin: 5% auto 0 auto;
//   & > div {
//     margin-top: 20px;
//   }
// `;

// function TransactionForm() {
//     const [formData, setFormData] = useState({
//         buyerName: '',
//         carId: '',
//         price: '',
//         // other necessary fields
//     });

//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await transaction(formData);
//             console.log('Transaction completed:', data);
//         } catch (error) {
//             console.error('Error in transaction:', error);
//         }
//     };

//     return (
//         <Container>
//             <Typography variant="h4">Complete Transaction</Typography>
//             <FormControl>
//                 <InputLabel htmlFor="buyerName">Buyer's Name</InputLabel>
//                 <Input id="buyerName" name="buyerName" value={formData.buyerName} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="carId">Car ID</InputLabel>
//                 <Input id="carId" name="carId" value={formData.carId} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="price">Price</InputLabel>
//                 <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//                 <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
//             </FormControl>
//         </Container>
//     );
// }

// export default TransactionForm;


// import React, { useState } from 'react';
// import { transaction } from '../services/api';


// function TransactionForm() {
//     const [formData, setFormData] = useState({
//         buyerName: '',
//         carId: '',
//         price: '',
//         // other necessary fields
//     });

//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await transaction(formData);
//             console.log('Transaction completed:', data);
//         } catch (error) {
//             console.error('Error in transaction:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 name="buyerName"
//                 value={formData.buyerName}
//                 onChange={handleChange}
//                 placeholder="Buyer's Name"
//             />
//             <input
//                 name="carId"
//                 value={formData.carId}
//                 onChange={handleChange}
//                 placeholder="Car ID"
//             />
//             <input
//                 name="price"
//                 type="number"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Price"
//             />
//             {/* Add more fields as needed */}
//             <button type="submit">Complete Transaction</button>
//         </form>
//     );
// }

// export default TransactionForm;


// import React, { useState } from 'react';

// function TransactionForm() {
//     const [formData, setFormData] = useState({
//         buyerName: '',
//         carId: '',
//         price: '',
//         // other necessary fields
//     });

//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/transactions', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             const data = await response.json();
//             console.log('Transaction completed:', data);
//         } catch (error) {
//             console.error('Error in transaction:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 name="buyerName"
//                 value={formData.buyerName}
//                 onChange={handleChange}
//                 placeholder="Buyer's Name"
//             />
//             <input
//                 name="carId"
//                 value={formData.carId}
//                 onChange={handleChange}
//                 placeholder="Car ID"
//             />
//             <input
//                 name="price"
//                 type="number"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Price"
//             />
//             {/* Add more fields as needed */}
//             <button type="submit">Complete Transaction</button>
//         </form>
//     );
// }

// export default TransactionForm;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Typography, TextField, Button, Grid, CircularProgress } from '@mui/material';
// // import axios from 'axios';
// import { TransactionApi } from '../services';

// const Transaction = () => {
//   const { carId } = useParams();
//   const [customerName, setCustomerName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [transactionCompleted, setTransactionCompleted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     // try {
//     //   console.log('transaction ho gya');
//     //   // Make a POST request to your backend API to complete the transaction
//     //   const response = await axios.post('http://localhost:4000/api/transactions', {
//     //     carId,
//     //     customerName,
//     //     email,
//     //     address
//     //   });
      
//     //   // Check if the transaction was successful
//     //   if (response.data.success) {
//     //     setTransactionCompleted(true);
//     //   } else {
//     //     setError(response.data.message);
//     //   }
//     // } catch (error) {
//     //   console.error('Error completing transaction:', error);
//     //   setError('An error occurred while processing your transaction. Please try again later.');
//     // } finally {
//     //   setLoading(false);
//     // }
//     let payload = {
//       carId,
//         customerName,
//         email,
//         address
//     }
//     TransactionApi(payload)
//     .then((res) => {
//       if (res.statusCode == 200) {
//         // setRange(res.data);
//       } else {
//         // setRange(res.data);
//         setTransactionCompleted(true);
//         console.log("something went wrong");
//       }
//     })
//     .catch((err) => {});
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: '2rem' }}>
//       <Typography variant="h4" gutterBottom>
//         Complete Your Car Order
//       </Typography>
//       {!transactionCompleted ? (
//         <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Name"
//                 fullWidth
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Address"
//                 fullWidth
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" disabled={loading}>
//                 {loading ? <CircularProgress size={24} /> : 'Confirm Order'}
//               </Button>
//             </Grid>
//           </Grid>
//           {error && <Typography variant="body2" color="error">{error}</Typography>}
//         </form>
//       ) : (
//         <Typography variant="body1">
//           Your order has been successfully placed!
//         </Typography>
//       )}
//     </Container>
//   );
// };

// export default Transaction;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// //import ResponsiveAppBar from '../components/ResponsiveAppBar';
// import Footer from '../components/Footer';

// const Transaction = () => {
//   const { carId } = useParams();
//   const [customerName, setCustomerName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [transactionCompleted, setTransactionCompleted] = useState(false);

//   const handleTransactionSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the transaction through your backend
//     // For demonstration, we'll just simulate a transaction
//     console.log(`Transaction for Car ID: ${carId} by ${customerName} (${email}) at ${address}`);
//     setTransactionCompleted(true);
//   };

//   return (
//     <div>
//       {/* <ResponsiveAppBar /> */}
//       <h1>Transaction for Car ID: {carId}</h1>
//       {!transactionCompleted ? (
//         <form onSubmit={handleTransactionSubmit}>
//           <div>
//             <label htmlFor="customerName">Name:</label>
//             <input
//               id="customerName"
//               type="text"
//               value={customerName}
//               onChange={(e) => setCustomerName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="address">Address:</label>
//             <input
//               id="address"
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Confirm Transaction</button>
//         </form>
//       ) : (
//         <p>Thank you, {customerName}. Your transaction for Car ID: {carId} has been processed!</p>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default Transaction;
