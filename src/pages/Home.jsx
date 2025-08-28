import React, { useState } from "react";
import { Link } from "react-router-dom";
import foodItems from "../data/foodData";

function Home() {
  const categories = [...new Set(foodItems.map(item => item.cat))].slice(0,4);
  const [activeCategory, setActiveCategory] = useState("Starters");
  const filteredItems = foodItems.filter((item) => item.cat === activeCategory).slice(0, 6);
  return (
    <>
      <section className="hero-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text align-content-center text-center text-md-start">
              <h1>WHERE EVERY BITE FEELS <span>SPECIAL</span></h1>
              <p className="m-auto m-md-0">Step Into A World Of Rich Flavors And Warm Hospitality. Our Chefs Craft Every Dish With Passion And Care.</p>
              <Link to="menu">
                <button className="order-btn">Dine With Delight Today →</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img src="./images/hero-side.png" alt="hero-img" className="img-fluid" data-aos="fade-left"  data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
            </div>
          </div>
        </div>
      </section>
      <section className="all-sec-p">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="./images/about-side.png" alt="about-img" className="img-fluid mb-4 mb-md-0" data-aos="fade-right"  data-aos-offset="500"
     data-aos-easing="ease-in-sine" />
            </div>
            <div className="col-md-6 align-content-center text-center text-md-start">
              <p className="section-title mb-2">● About Us</p>
              <h1 className="sec-head">EVERY VISIT BEGINS<br />WITH <span>FLAVOR</span></h1>

              <p className="mt-3 text-white">
                At SavoryNest, We Believe Food Is More Than Just A Meal — It's A Memory In The Making.
                Rooted In Tradition And Inspired By Innovation, Our Kitchen Brings Together Fresh Ingredients,
                Bold Flavors, And Heartfelt Hospitality.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-2 about-list-items"><img src="./images/check-icon.png" alt="✔" /> Fresh Ingredients Always First</li>
                <li className="mb-2 about-list-items"><img src="./images/check-icon.png" alt="✔" /> Made With Heart</li>
                <li className="mb-2 about-list-items"><img src="./images/check-icon.png" alt="✔" /> A Place To Belong</li>
              </ul>
              <Link to="menu">
              <button className="order-btn mt-3">Order Now →</button>
              </Link>
              

            </div>
          </div>
          <div className="about-bottom">
            <div className="row">
              <div className="col-md-4">
                <div className="about-bottom-card" data-aos="fade-up"  data-aos-offset="200" data-aos-anchor-placement="top-bottom">
                  <img src="./images/about-btm-icon-1.png" alt="icon" className="img-fluid" />
                  <div className="about-card-inner">
                    <h3>Exquisite Experience</h3>
                    <p>Personalized service that may turn every visit into a memorable moment.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-bottom-card" data-aos="fade-up"  data-aos-offset="200" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                  <img src="./images/about-btm-icon-2.png" alt="icon" className="img-fluid" />
                  <div className="about-card-inner">
                    <h3>Bold, Rich Flavors</h3>
                    <p>We take pride in dishes that might surprise your palate with every bite.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-bottom-card" data-aos="fade-up"  data-aos-offset="200" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                  <img src="./images/about-btm-icon-3.png" alt="icon" className="img-fluid" />
                  <div className="about-card-inner">
                    <h3>Locally Inspired Cuisine</h3>
                    <p>Crafted with native ingredients and a modern twist on tradition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="all-sec-p bg-gray">
        <div className="container">
          <div className="text-center">
            <p className="section-title mb-2">● Main Dishes</p>
            <h1 className="sec-head">INDULGE YOUR TASTE BUDS WITH<br />OUR <span> SIGNATURE </span> SELECTIONS</h1>
          </div>
          <div className="row pt-5">
            <div className="col-md-3">
              <div className="main-dishes-card" data-aos="zoom-in"  data-aos-offset="200" data-aos-delay="100">
                <img src="./images/dish-1.png" alt="dish" className="img-fluid" />
                <h4>Soups</h4>
                <p>Warm, hearty, and packed with flavors — our soups are crafted to comfort your soul and kickstart your dining experience with freshness.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="main-dishes-card" data-aos="zoom-in"  data-aos-offset="200" data-aos-delay="300">
                <img src="./images/dish-2.png" alt="dish" className="img-fluid" />
                <h4>Salads</h4>
                <p>Crisp, refreshing, and nutrient-rich — our salads bring together seasonal greens and vibrant dressings for a wholesome balance of taste and health.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="main-dishes-card" data-aos="zoom-in"  data-aos-offset="200" data-aos-delay="500">
                <img src="./images/dish-3.png" alt="dish" className="img-fluid" />
                <h4>SeaFoods</h4>
                <p>From ocean to plate — indulge in our seafood specialties, seasoned to perfection and cooked with authentic coastal flavors.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="main-dishes-card" data-aos="zoom-in"  data-aos-offset="200" data-aos-delay="700">
                <img src="./images/dish-4.png" alt="dish" className="img-fluid" />
                <h4>Desserts</h4>
                <p>Sweet endings made special — our desserts are a delightful mix of classic favorites and modern twists to satisfy every craving.</p>
              </div>
            </div>
          </div>
          <p className="text-center text-white mt-5">Hungry For Something Delicious? <Link to="/menu" className="ex-link">View All Dishes</Link></p>
        </div>

      </section>
      <section className="all-sec-p">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="./images/offer-side.png" alt="offer-img" className="img-fluid" />
            </div>
            <div className="col-md-6 align-content-center text-center text-md-start">
              <p className="section-title mb-2">● Our Daily Offers</p>
              <h1 className="sec-head">TWIRL INTO FLAVOR WITH OUR <span>DAILY SPECIAL</span></h1>

              <p className="mt-3 text-white">
                Savor the perfect blend of fresh vegetables, aromatic herbs, and al dente pasta tossed in a light olive oil dressing. Every bite bursts with flavor and may just become your new favorite comfort dish.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-2 about-list-items"><img src="./images/check-icon.png" alt="✔" />Freshly picked cherry tomatoes & basil</li>
                <li className="mb-2 about-list-items"><img src="./images/check-icon.png" alt="✔" />Lightly seasoned with olive oil & herbs</li>
                <li className="mb-2 about-list-items"><img src="./images/check-icon.png" alt="✔" />Perfect for vegetarian & light meal lovers</li>
              </ul>
              <Link to="menu">
              <button className="order-btn mt-3">Explore More →</button>
              </Link>
              

            </div>
          </div>
        </div>
      </section>
      <section className="all-sec-p bg-gray">
        <div className="container">
          <div className="text-center">
            <p className="section-title mb-2">● Our Menu</p>
            <h1 className="sec-head">A CURATED SELECTION THAT<br />ELEVATES <span>EVERY BITE</span></h1>
          </div>
          <div>
            <div className="prod-cat">
              <span className="cat-dot">●</span>
              {categories.map((cat) => (
                
                <span 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cat-item ${
              activeCategory === cat ? "active" : ""
            }`}>{cat} &nbsp;<span className="cat-dot">●</span></span>
            
            
              ))}
            </div>
            <div className="row g-5 mt-5">
              {filteredItems.map((item) => ( 
                <div className="col-md-6" key={item.id}>
                  <Link to={`/menu/${item.id}`}>
                <div className="prod-items" data-aos="zoom-in" data-aos-delay="100">
                  <div className="prod-img"><img src={item.image} alt={item.name} /></div>
                  <div className="prod-item-content text-white">
                    <div className="prod-item-name">
                      <h5>{item.name}</h5>
                      <hr />
                      <span>${item.price}</span>
                    </div>
                    <p>{item.desc}</p>
                  </div>

                </div>
                </Link>
              </div>
            ))}
              
            </div>
          </div>
        </div>
      </section>
      <section className="all-sec-p testi-bg">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title mb-2">● Our Testimonials</p>
            <h1 className="sec-head">REAL STORIES OF MEMORABLE<br /><span> MEALS AND EXPERIENCES</span></h1>
          </div>
          <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="text-center text-white testi-inner">
        <img src="./images/quote.png" alt="''" />
        <p>"The moment I tasted the first bite, I knew I'd found a gem. The flavors were balanced, fresh, and beautifully presented. Staff were knowledgeable and helped us pick the perfect pairing. It truly felt like a fine dining experience at heart."</p>
        
          <img src="./images/testi-1.png" alt="user" />
        
        <p className="testi-name">Emma Rivera, Food Blogger</p>
      </div>
    </div>
    <div className="carousel-item">
       <div className="text-center text-white testi-inner">
        <img src="./images/quote.png" alt="''" />
        <p>"From the warm welcome to the final dessert, everything was top-tier. The burger was juicy, and the pasta was rich with flavor. The team made sure we felt special throughout the meal. It's the kind of place that earns your loyalty fast."</p>
        
          <img src="./images/testi-2.png" alt="user" />
        
        <p className="testi-name">Jason Mehta, Photographer</p>
      </div>
    </div>
    <div className="carousel-item">
       <div className="text-center text-white testi-inner">
        <img src="./images/quote.png" alt="''" />
        <p>"The ambiance is cozy, the service is thoughtful, and dishes are unforgettable. Every bite felt like it was made with care and creativity. They even offered customizations to match our preferences. A perfect spot for both casual meals and celebrations."</p>
        
          <img src="./images/testi-3.png" alt="user" />
        
        <p className="testi-name">Rhea Kulkarni, Entrepreneur</p>
      </div>
    </div>
    <div className="carousel-item">
       <div className="text-center text-white testi-inner">
        <img src="./images/quote.png" alt="''" />
        <p>"A true delight for food lovers! The portions were generous and satisfying. The Thai curry had the perfect blend of heat and flavor. Even the appetizers stood out with their freshness and crunch. It might become my go-to spot every time I’m in town."</p>
        
          <img src="./images/testi-4.png" alt="user" />
        
        <p className="testi-name">Marcus L., Travel Enthusiast</p>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>


      </section>
      <section className="all-sec-p bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-content-center text-md-start text-center">
              <p className="section-title mb-2">● Book Your Table</p>
              <h1 className="sec-head">SECURE YOUR SPOT AND <br /> SAVOR A GOURMET <span> EXPERIENCE</span></h1>
              <div className="text-white reserve-timing">
                <h6>Our Timings</h6>
                <div>
                <div>
                <p>Mon-Thu</p>
                <p>Fri-Sat</p>
                <p>Sun</p>
              </div>
              <div>
                <p>11:00 AM - 9:30 PM</p>
                <p>9:00 AM - 10:00 PM</p>
                <p>Closed</p>
              </div>
              </div>
              
              </div>
              

            </div>
            <div className="col-md-6">
              <div className="reserve-form">
                <form action="/contact">
                  <label htmlFor="res-name">Your Name</label>
                  <input type="text" name="res-name" />
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label htmlFor="res-email">Email Address</label>
                      <input type="email" name="res-email" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="res-phone">Phone Number</label>
                      <input type="tel" name="res-phone"/>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <label htmlFor="res-date">Date</label>
                      <input type="date" name="res-date" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="res-time">Time</label>
                      <input type="time" name="res-time" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="res-person">No. of Persons</label>
                      <input type="number" name="res-person"/>
                    </div>
                  </div>
                  <button type="submit" className="order-btn btn-black mt-4">Reserve Now →</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
