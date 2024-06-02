// // frontend/components/Dashboard/Wishlist.js
// import React, { useState, useEffect } from 'react';
// import { getWishlist } from '../../api/wishlist';

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await getWishlist();
//         setWishlist(response.data);
//       } catch (error) {
//         // Handle error
//       }
//     };

//     fetchWishlist();
//   }, []);

//   return (
//     // Wishlist UI
//   );
// };

// export default Wishlist;
