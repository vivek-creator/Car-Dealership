import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51P81IzSCwAOVcn2NCAtzebuBSOONzPEviD5190jKHDrIC2U3fb8oVauQ7yIUTDRTy9z8glEzhEfm9BDZi9DVthvh00c9jh2o9M");

const handleBuy = async (car) => { // Change the parameter name to 'car' instead of 'product'
  try {
    const stripe = await stripePromise;

    const response = await fetch("http://localhost:8080/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ car }) // Send the 'car' object directly instead of wrapping it in 'product'
    });
    
    const session = await response.json();

    // Redirect to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId
    });

    if (result.error) {
      console.log(result.error);
    } else {
      console.log("Redirecting to checkout page...");
    }

  } catch (error) {
    console.error('Network or server error:', error);
  }
};

export default handleBuy;



