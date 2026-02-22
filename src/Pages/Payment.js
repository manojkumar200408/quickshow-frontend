import axios from "axios";

const handlePayment = async () => {

  try {
    const { data } = await axios.post(
      "http://localhost:7000/api/payment/create-order",
      { amount: 200 }   // seat price
    );

    const options = {
      key: "rzp_test_your_key_id", // same as .env KEY_ID
      amount: data.order.amount,
      currency: data.order.currency,
      name: "QuickShow",
      description: "Movie Ticket Booking",
      order_id: data.order.id,
      handler: function (response) {
        alert("Payment Successful 🎉");
        console.log(response);
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.log(error);
  }
};
<button onClick={handlePayment}>
  Pay ₹200
</button>