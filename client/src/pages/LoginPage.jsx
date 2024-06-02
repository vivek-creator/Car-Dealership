//testing code
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { loginDetails } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginDetails(login);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        toast.success('Login Successful');
        navigate('/user-dashboard');
      } else {
        toast.error('Invalid credentials. Please try again.');
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Network or server error:', error);
      toast.error('Network or server error. Please try again later.');
    }
  };

  return (
    <div>
      <ToastContainer />
      <Container component="main" maxWidth="xs">
        <Paper elevation={6} style={{ padding: '16px', marginTop: '80px' }}>
          <Typography variant="h5" align="center">
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={login.email}
              onChange={onValueChange}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={login.password}
              onChange={onValueChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0px 16px' }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginPage;

// import { useNavigate } from 'react-router-dom'; upload on git code
// import Footer from '../components/Footer';
// import { TextField, Button, Container, Typography, Paper } from '@mui/material';
// import React, { useState } from 'react';
// import { loginDetails } from '../services/api';

// const LoginPage = () => {
//   const [login, setLogin] = useState({
//     email: '',
//     password: '',
//   });

//   console.log('login page here');
//   const navigate = useNavigate();

//   const onValueChange = (e) => {
//     setLogin({...login, [e.target.name]: e.target.value});
//   }

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await loginDetails(login);
//       if (response.status === 200) {
//         navigate('/user-dashboard'); // Navigate to dashboard if login is successful
//       } else {
//         // Handle errors or unsuccessful login attempts here
//         console.error('Login failed:', response.data);
//       }
//     } catch (error) {
//       console.error('Network or server error:', error);
//     }
//   }
  
//   return (
//     <div>
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={6} style={{ padding: '16px', marginTop: '80px' }}>
//           <Typography variant="h5" align="center">
//             Login
//           </Typography>
//           <form onSubmit={handleLogin}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={login.email}
//               onChange={onValueChange}
//             />
//             <TextField
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={login.password}
//               onChange={onValueChange}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               style={{ margin: '24px 0px 16px' }}
//             >
//               Sign In
//             </Button>
//           </form>
//         </Paper>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default LoginPage;


//import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import { TextField, Button, Container, Typography, Paper } from '@mui/material';
// import React, { useState } from 'react';
// import { loginDetails } from '../services/api';

//      const LoginPage = () => {
//       const [login, setLogin] = useState({
//         email: '',
//         password: '',
       
//       });
//      console.log('login page here');
//      //const navigate = useNavigate();

//      const [email,password] = useState()

//      const onValueChange=(e) => {
     
//       setLogin({...login, [e.target.name]: e.target.value});
//   }

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     await loginDetails(login);
//   }
    
//   // const handleNavigateDashboard = () => {
//   //   navigate('/dashboard'); // Navigate to the login page
//   // };
    
//   return (
//     <div>
      
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={6} style={{ padding: '16px', marginTop: '80px' }}>
//           <Typography variant="h5" align="center">
//             Login
//           </Typography>
//           <form>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => onValueChange(e)}
//             />
//             <TextField
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => onValueChange(e)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               style={{ margin: '24px 0px 16px' }} 
//               onClick={handleLogin}
//             >
//               Sign In
//             </Button>
//           </form>
//         </Paper>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from 'react'; okk code 
// import { useNavigate } from 'react-router-dom';
// import ResponsiveAppBar from '../components/ResponsiveAppBar';
// import Footer from '../components/Footer';
// import { TextField, Button, Container, Typography, Paper } from '@mui/material';

// const LoginPage = () => {
//     console.log('login page here');
// //   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // If you have separate paths for users, admins, and dealerships, add logic to handle that
//   // For example, you could have a state to keep track of the role and set it based on the user's input or login response

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Here you would handle the login logic, possibly checking against an API and then navigating to the correct dashboard
//     // This is just a placeholder for that logic
//     console.log('Login credentials', { email, password });
//     // After successful login, navigate to the appropriate dashboard
//     // This will depend on your app's logic - usually, the server will tell you the role of the user upon login
//     // navigate('/user-dashboard');
//   };

//   return (
//     <div>
//       {/* <ResponsiveAppBar /> */}
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={6} style={{ padding: '16px', marginTop: '80px' }}>
//           <Typography variant="h5" align="center">
//             Login
//           </Typography>
//           <form onSubmit={handleLogin}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               style={{ margin: '24px 0px 16px' }}
//             >
//               Sign In
//             </Button>
//           </form>
//         </Paper>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default LoginPage;
