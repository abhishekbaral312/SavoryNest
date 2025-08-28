import { useParams, Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import SubBanner from "../components/Otherban";
import foodItems from "../data/foodData";

function Details() {
  const Id = useParams();
  const food = foodItems.find((item) => item.id === Number(Id.id));
  const navigate = useNavigate();
  const [spicyLevel, setSpicyLevel] = useState("Regular");

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
   const existingItem = cart.find((item) => item.id === food.id && item.spicyLevel === spicyLevel);

    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cart.push({ ...food, quantity: 1, spicyLevel }); 
    }
    

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };
  return (
    
    <>
      <SubBanner name="Menu Details" page="Menu / Menu Details" />
      <section className="all-sec-p">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-content-center order-3 order-md-0">
              <p className="section-title mb-2">● {food.cat}</p>
              <h1 className="sec-head">{food.name}</h1>

              <p className="mt-3 text-white">{food.desc}</p>

              <h5 className="details-subhead">Ingredients:</h5>
              <p className="text-white">{food.ingredients}</p>
              <h5 className="details-subhead mt-4">
                Calories: <span>{food.calories} kcal</span>
              </h5>
              <h5 className="details-subhead mt-4">
                Price: <span>{`$${food.price}`}</span>
              </h5>
              {["Starters", "Seafoods", "Veg Platter"].includes(food.cat) && (
                <h5 className="details-subhead mt-4 spicy-level">
                  Spicy Level: 
                  <span 
                  onClick={() => setSpicyLevel("Regular")}
                  style={{
                      background: spicyLevel === "Regular" ? "var(--primary-color)" : "transparent",
                    }}
                  >Regular</span>
                  <span 
                  onClick={() => setSpicyLevel("Spicy")}
                  style={{
                      background: spicyLevel === "Spicy" ? "var(--primary-color)" : "transparent",
                    }}
                  >Spicy</span>
                </h5>
              )}
                <button className="order-btn mt-3"  onClick={handleAddToCart}>Order Now →</button>
            </div>
            <div className="col order-2 order-md-2"></div>
            <div className="col-md-5">
              <img
                src={`.${food.image}`}
                alt={food.name}
                className="img-fluid details-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="all-sec-p bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="../images/details-side.png"
                alt="offer-img"
                className="img-fluid object-fit-cover"
              />
            </div>
            <div className="col-md-6 align-content-center">
              <p className="section-title mb-2">● Our Ingredients</p>
              <h1 className="sec-head">
                DISHES MADE WITH <span>PUREST INGREDIENTS</span>
              </h1>

              <p className="mt-3 text-white">
                We believe in serving more than just food — we serve
                authenticity. Our dishes are crafted using hand-selected,
                high-quality ingredients that are free from artificial flavors
                and additives. Savor the difference with every bite, knowing
                it's made from nature's best.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-2 about-list-items">
                  <img src="../images/check-icon.png" alt="✔" />
                  Premium Quality
                </li>
                <li className="mb-2 about-list-items">
                  <img src="../images/check-icon.png" alt="✔" />
                  Flexible Discounts
                </li>
                <li className="mb-2 about-list-items">
                  <img src="../images/check-icon.png" alt="✔" />
                  Express Delivery
                </li>
              </ul>
              <Link to="/menu">
                <button className="order-btn mt-3">Explore More →</button>
              </Link>
            </div>
          </div>
          <div className="about-bottom">
            <div className="row details-btm">
              <div className="col-md-3">
                <div className="about-bottom-card">
                  <img
                    src="../images/details-btm-icon-1.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <div className="about-card-inner">
                    <h3>309</h3>
                    <p>Professional Chefs</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="about-bottom-card">
                  <img
                    src="../images/details-btm-icon-2.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <div className="about-card-inner">
                    <h3>453+</h3>
                    <p>Items On The Menu</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="about-bottom-card">
                  <img
                    src="../images/details-btm-icon-3.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <div className="about-card-inner">
                    <h3>25+</h3>
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="about-bottom-card">
                  <img
                    src="../images/details-btm-icon-3.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <div className="about-card-inner">
                    <h3>300+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
