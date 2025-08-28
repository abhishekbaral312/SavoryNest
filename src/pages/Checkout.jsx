import {useNavigate} from "react-router-dom";
import SubBanner from "../components/Otherban";
import React, { useState, useEffect } from "react";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const discountedTotal = localStorage.getItem("discountedTotal");
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const totalPrice = storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice.toFixed(2));
  }, []);
  const discount = total - discountedTotal;
  const [formData, setFormData] = useState({
    billingFirstName: "",
    billingLastName: "",
    billingEmail: "",
    billingPhone: "",
    billingCountry: "",
    billingState: "",
    billingCity: "",
    billingZip: "",
    billingAddress: "",

    deliveryFirstName: "",
    deliveryLastName: "",
    deliveryEmail: "",
    deliveryPhone: "",
    deliveryCountry: "",
    deliveryState: "",
    deliveryCity: "",
    deliveryZip: "",
    deliveryAddress: "",

    cardType: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Billing
    if (!formData.billingFirstName.trim())
      newErrors.billingFirstName = "First Name is required";
    if (!formData.billingLastName.trim())
      newErrors.billingLastName = "Last Name is required";
    if (!formData.billingCountry.trim())
      newErrors.billingCountry = "Country is required";
    if (!formData.billingCity.trim())
      newErrors.billingCity = "City is required";
    if (!formData.billingState.trim())
      newErrors.billingState = "State is required";
    if (!formData.billingAddress.trim())
      newErrors.billingAddress = "Address is required";
    if (!formData.billingEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.billingEmail = "Valid Email is required";
    if (!formData.billingPhone.match(/^\d{10}$/))
      newErrors.billingPhone = "Phone must be 10 digits";
    if (!formData.billingZip.match(/^\d{5,6}$/))
      newErrors.billingZip = "Valid Zip/Postal Code required";

    // Delivery
    if (!formData.deliveryFirstName.trim())
      newErrors.deliveryFirstName = "First Name is required";
    if (!formData.deliveryLastName.trim())
      newErrors.deliveryLastName = "Last Name is required";
    if (!formData.deliveryCountry.trim())
      newErrors.deliveryCountry = "Country is required";
    if (!formData.deliveryCity.trim())
      newErrors.deliveryCity = "City is required";
    if (!formData.deliveryState.trim())
      newErrors.deliveryState = "State is required";
    if (!formData.deliveryAddress.trim())
      newErrors.deliveryAddress = "Address is required";
    if (!formData.deliveryEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.deliveryEmail = "Valid Email is required";
    if (!formData.deliveryPhone.match(/^\d{10}$/))
      newErrors.deliveryPhone = "Phone must be 10 digits";
    if (!formData.deliveryZip.match(/^\d{5,6}$/))
      newErrors.deliveryZip = "Valid Zip/Postal Code required";

    // Payment
    if (!formData.cardType) newErrors.cardType = "Select a card type";
    if (!formData.cardNumber.match(/^\d{16}$/))
      newErrors.cardNumber = "Card must be 16 digits";
    if (!formData.expiryMonth) newErrors.expiryMonth = "Select Expiry Month";
    if (!formData.expiryYear) newErrors.expiryYear = "Select Expiry Year";
    if (!formData.cvv.match(/^\d{3}$/)) newErrors.cvv = "CVV must be 3 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("✅ Checkout successful!");
      console.log("Form Submitted:", formData);
      localStorage.removeItem("cart");
      setCart([]);
      setTotal(0);
      setFormData({});
      navigate("/thankyou");
    } else {
      alert("❌ Please correct the errors before submitting.");
    }
  };
  const showError = (name) =>
    errors[name] && <p style={{ color: "red" }}>{errors[name]}</p>;

  return (
    <>
      <SubBanner name="Checkout" page="Cart / Checkout" />
      <section className="all-sec-p">
        <div className="container">
          <form
            action="#"
            method="post"
            className="checkout-sec"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-6">
                <h3>Billing Details</h3>
                <div className="row mt-3">
                  <div className="col-md-6 mt-4">
                    <span>First Name</span>
                    <br />
                    <input
                      type="text"
                      name="billingFirstName"
                      value={formData.billingFirstName}
                      onChange={handleChange}
                    />
                    {showError("billingFirstName")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Last Name</span>
                    <br />
                    <input
                      type="text"
                      name="billingLastName"
                      value={formData.billingLastName}
                      onChange={handleChange}
                    />
                    {showError("billingLastName")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Phone</span>
                    <br />
                    <input
                      type="text"
                      name="billingPhone"
                      value={formData.billingPhone}
                      onChange={handleChange}
                    />
                    {showError("billingPhone")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Email Address</span>
                    <br />
                    <input
                      type="text"
                      name="billingEmail"
                      value={formData.billingEmail}
                      onChange={handleChange}
                    />
                    {showError("billingEmail")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Country</span>
                    <br />
                    <input
                      type="text"
                      name="billingCountry"
                      value={formData.billingCountry}
                      onChange={handleChange}
                    />
                    {showError("billingCountry")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>State</span>
                    <br />
                    <input
                      type="text"
                      name="billingState"
                      value={formData.billingState}
                      onChange={handleChange}
                    />
                    {showError("billingState")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>City</span>
                    <br />
                    <input
                      type="text"
                      name="billingCity"
                      value={formData.billingCity}
                      onChange={handleChange}
                    />
                    {showError("billingCity")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Zip/Postal Code</span>
                    <br />
                    <input
                      type="text"
                      name="billingZip"
                      value={formData.billingZip}
                      onChange={handleChange}
                    />
                    {showError("billingZip")}
                  </div>
                  <div className="col-md-12 mt-4">
                    <span>Address</span>
                    <br />
                    <textarea
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleChange}
                    ></textarea>
                    {showError("billingAddress")}
                  </div>
                </div>
                <h3 className="mt-5">Payment Details</h3>
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <span>Select Card</span>
                    <br />
                    <select
                      name="cardType"
                      value={formData.cardType}
                      onChange={handleChange}
                    >
                      <option value="">--Select Card--</option>
                      <option value="visa">Visa</option>
                      <option value="discover">Discover</option>
                      <option value="maestro">Maestro</option>
                    </select>
                    {showError("cardType")}
                  </div>
                  <div className="col-md-12 mt-4">
                    <span>Card Details</span>
                    <br />
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                    />
                    {showError("cardNumber")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Expiry Month</span>
                    <br />
                    <select
                      name="expiryMonth"
                      value={formData.expiryMonth}
                      onChange={handleChange}
                    >
                      <option value="">--Select Month--</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    {showError("expiryMonth")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Expiry Year</span>
                    <br />
                    <select
                      name="expiryYear"
                      value={formData.expiryYear}
                      onChange={handleChange}
                    >
                      <option value="">--Select Year--</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                      <option value="2031">2031</option>
                      <option value="2032">2032</option>
                      <option value="2033">2033</option>
                      <option value="2034">2034</option>
                      <option value="2035">2035</option>
                    </select>
                    {showError("expiryYear")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Cvv</span>
                    <br />
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                    {showError("cvv")}
                  </div>
                  <div className="col-md-6 mt-4 align-content-center">
                    <img src="./images/cards.png" width="160px" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Delivery Details</h3>
                <div className="row mt-3">
                  <div className="col-md-6 mt-4">
                    <span>First Name</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryFirstName"
                      value={formData.deliveryFirstName}
                      onChange={handleChange}
                    />
                    {showError("deliveryFirstName")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Last Name</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryLastName"
                      value={formData.deliveryLastName}
                      onChange={handleChange}
                    />
                    {showError("deliveryLastName")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Phone</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryPhone"
                      value={formData.deliveryPhone}
                      onChange={handleChange}
                    />
                    {showError("deliveryPhone")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Email Address</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryEmail"
                      value={formData.deliveryEmail}
                      onChange={handleChange}
                    />
                    {showError("deliveryEmail")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Delivery Country</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryCountry"
                      value={formData.deliveryCountry}
                      onChange={handleChange}
                    />
                    {showError("deliveryCountry")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Delivery State</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryState"
                      value={formData.deliveryState}
                      onChange={handleChange}
                    />
                    {showError("deliveryState")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Delivery City</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleChange}
                    />
                    {showError("deliveryCity")}
                  </div>
                  <div className="col-md-6 mt-4">
                    <span>Zip/Postal Code</span>
                    <br />
                    <input
                      type="text"
                      name="deliveryZip"
                      value={formData.deliveryZip}
                      onChange={handleChange}
                    />
                    {showError("deliveryZip")}
                  </div>
                  <div className="col-md-12 mt-4">
                    <span>Delivery Address</span>
                    <br />
                    <textarea
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                    ></textarea>
                    {showError("deliveryAddress")}
                  </div>
                </div>
                <div>
                  <h3 className="my-5">Order Summery</h3>
                  {cart.map((item, i) => (
                  <div className="summery-item mt-4" key={i}>
                    <div className="prod-img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="summery-details">
                      <div>
                      <h4>{item.name}</h4>
                      {["Starters", "Seafoods", "Veg Platter"].includes(item.cat) && (
                      <p>{item.spicyLevel}</p>
                      )}
                      </div>
                      <span>x {item.quantity}</span>
                      <span>${item.price * item.quantity}</span>
                    </div>
                  </div>
                  ))}
                  <div className="summery-total">
                    <ul className="title">
                      <li>Subtotal</li>
                      <li>Discount</li>
                      <li>Delivery</li>
                      <li>Total</li>
                    </ul>
                    <ul>
                      <li>${total}</li>
                      <li>${discount.toFixed(2)}</li>
                      <li>Free</li>
                      <li>${discountedTotal}</li>
                    </ul>
                  </div>
                </div>
                <button type="submit" className="order-btn mt-3">
                  Complete Checkout →
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Checkout;
