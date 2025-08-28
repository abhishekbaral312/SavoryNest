import { Link } from "react-router-dom";
import SubBanner from "../components/Otherban";
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const [isApplied, setIsApplied] = useState(false); 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

   useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const handleApplyDiscount = () => {
    let discountValue = 0;
    // Example codes
    if (discountCode === "SAVE10") {
      discountValue = total * 0.1; // 10% off
      setMessage("Discount applied! You saved 10%");
      setIsApplied(true);
    } else if (discountCode === "SAVE50" && total >= 100) {
      discountValue = 50; // flat $50 off
      setMessage("Discount applied! You saved $50");
      setIsApplied(true);
    } else {
      setMessage("Invalid Discount Code");
      setIsApplied(false);
      return;
    }

    setDiscount(discountValue);
  };

  const finalTotal = total - discount;
  localStorage.setItem("discountedTotal", finalTotal.toFixed(2));

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((_,i) => i !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //discount

  return (
    <>
      <SubBanner name="Cart" page=" Menu Details / Cart" />
      <section className="all-sec-p">
        <div className="container">
          {cart.length === 0 ? (
            <div className="text-center">
            <h1 className="text-white text-center">No items in cart</h1>
            <Link to="/menu">
            <button className="order-btn mt-4">Show Menu</button>
            </Link>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-8">
                {cart.map((item, i) => (
                  <div className="row cart-item align-content-center" key={i}>
                    <div className="col-md-2 col-4">
                      <div className="prod-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div className="col-md-8 col-6 align-content-center">
                      <h4 className="text-white">{item.name}</h4>
                      {["Starters", "Seafoods", "Veg Platter"].includes(
                        item.cat
                      ) && (
                        <p className="text-white">
                          Spicy Level : <span>{item.spicyLevel}</span>
                        </p>
                      )}
                      <p className="text-white">
                        <span>Qty: {item.quantity}</span>
                        <span className="cart-price">{`$${item.price * item.quantity}`}</span>
                      </p>
                    </div>
                    <div className="col-md-2 col-2 align-content-center">
                      <button
                        className="btn cart-remove"
                        onClick={() => handleRemove(i)}
                      >
                        <img
                          src="./images/remove.png"
                          alt="Remove"
                          className="img-fluid"
                        />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-btn-group d-flex mt-5">
                  <button className="order-btn" onClick={clearCart}>
                    Empty Cart
                  </button>
                  <Link to="/menu">
                    <button className="order-btn">Add More Items</button>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="cart-summery">
                  <h2 className="text-center mb-4">Cart Totals</h2>
                  <p>
                    Sub Total: <span>${total.toFixed(2)}</span>
                  </p>
                  <p>
                    Delivery: <span>Free</span>
                  </p>
                  <p className="position-relative">
                    Discount Code:
                    <input
                      type="text"
                      name="discoundCode"
                      placeholder="Try SAVE10"
                      value={discountCode}
                      disabled={isApplied}
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <span 
                    onClick={handleApplyDiscount} 
                    className="discount-btn"
                    >Apply</span>
                  </p>
                  <hr />
                  {message && <p className="discount-message"  style={{ color: isApplied ? "green" : "red" }}>{message}</p>}
                  <p>
                    Total: <span>${finalTotal.toFixed(2)}</span>
                  </p>
                  <Link to="/checkout">
                    <button className="order-btn btn-black mt-4">
                      Proceed To Checkout →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
