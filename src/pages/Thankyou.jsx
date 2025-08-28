import SubBanner from "../components/Otherban";

function Thankyou() {
  const newOrderId = "ORD-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
  return (
    <>
    <SubBanner name="Thank You" page="Checkout / Thankyou" />
    <section className="all-sec-p text-center text-white">
      <div className="container">
        <h1>Thank You</h1>
        <h2 className="my-4">Your Order Will Be Delivered Quickly</h2>
        <p>Your Order Id: {newOrderId}</p>
      </div>
    </section>
    </>
  );
}

export default Thankyou;