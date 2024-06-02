import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const stripe = new Stripe("sk_test_51P81IzSCwAOVcn2N8aKkIi5SAcyFTLAoHBnnYtbFLCdL58oqOpkW9ffNjHDVSa6tYJn0LVGg2lJtq9CBVcEjGrYH00HvXXh0xA");

app.post("/api/create-checkout-session", async (req, res) => {
    const { car } = req.body; // Extract car object directly

    const lineItem = {
        price_data: {
            currency: 'inr',
            product_data: {
                name: car.id,
            },
            unit_amount: parseInt(car.price.replace(/[^0-9]/g, '')) * 100,
        },
        quantity: 1,
    };
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [lineItem], // Use an array with a single line item
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });
    
        res.json({ sessionId: session.id });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 8080;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password).then(() => {
  app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
}).catch(error => {
  console.error('Failed to connect to the database:', error);
});



// import express from 'express'; ok code 
// import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import Stripe from 'stripe';
// import Connection from './database/db.js';
// import Routes from './routes/route.js';

// const app = express();
// dotenv.config();

// app.use(bodyParser.json({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());
// app.use('/', Routes);


// //stripe integration
// const stripe = Stripe("sk_test_51P81IzSCwAOVcn2N8aKkIi5SAcyFTLAoHBnnYtbFLCdL58oqOpkW9ffNjHDVSa6tYJn0LVGg2lJtq9CBVcEjGrYH00HvXXh0xA");

// app.post("/api/create-checkout-sessions", async (req, res) => {
//     const { product } = req.body;
    
//     const lineItems = product.map(item => ({
//         price_data: {
//             currency: 'usd',
//             product_data: {
//                 name: item.name,
//             },
//             unit_amount: parseInt(item.price.replace(/[^0-9]/g, '')) * 100,
//         },
//         quantity: 1, // Assuming 1 quantity for each product
//     }));
    
//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: lineItems,
//             mode: 'payment',
//             success_url: 'http://localhost:3000/success',
//             cancel_url: 'http://localhost:3000/cancel',
//         });
    
//         res.json({ id: session.id });
//     } catch (error) {
//         console.error('Stripe error:', error);
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post("create-checkout-sessions", async(req,res)=>{
//     const {product} = req.body;

//     const lineItem= product.map((product)=>({
//         price_date:{
//             currency: "usd",
//             product_data: {
//                 name:product.id
//             },
//             unit_ammount: product.price* 100,
//         }
//     }));
    
//     const session = await stripe.checkout.session.create({
//         payment_method_types: ["card"],
//         line_items: lineItem,
//         mode: "payment",
//         success_url: "http://localhost:3000/success",
//         cancel_url: "http://localhost:3000/cancel",
//     });

//     res.json({id: session.id})
    
// })


// const PORT = process.env.PORT || 8080;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// // Establish database connection and then start the server
// Connection(username, password).then(() => {
//   app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
// }).catch(error => {
//   console.error('Failed to connect to the database:', error);
// });


// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';


// import Connection from './database/db.js';
// import Routes from './routes/route.js';

// const app = express();

// dotenv.config();

// app.use(bodyParser.json({extended : true}));
// app.use(bodyParser.urlencoded({extended : true}));

// app.use(cors());

// app.use('/', Routes);


// const PORT = process.env.PORT || 8080;


// const username= process.env.DB_USERNAME;
// const password= process.env.DB_PASSWORD;

// Connection(username,password);

// app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
// Connection().then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }).catch(error => {
//     console.error('Failed to connect to the database:', error);
// });
