export const carDealership = {
    CARDEALERSHIP: "/",
  
    /* if we want to access userID, carID, adminUser or other required information to save in session 
    we can define here multiple time so that we can access this information in frontend anywhere without hitting api */
    USER_ID: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).UserID
      : "",
    CARDEALERSHIP_API: "http://localhost:4000/api/", //localhost running on port 4000
    // CARDEALERSHIP_API: "http://localhost:3000/api/", //localhost running on port 3000
  
    // CARDEALERSHIP_API: "https://car-dealership.in/api/", //live progect server url
  
    TOKEN: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).token
      : "",
  
    StripePublishableKey: "your-payment gateway integrated api key",
  
    GoogleApiKey: "your integrated google api key",
  };
  
  export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
  
  export const auth0Config = {
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
  };
  
  export const cognitoConfig = {
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    clientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
  };