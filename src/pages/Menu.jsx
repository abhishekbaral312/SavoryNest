import foodItems from "../data/foodData";
import SubBanner from "../components/Otherban";
import { Link } from "react-router-dom";

function Menu() {
 const categories = [...new Set(foodItems.map((item) => item.cat))];
 
  return (
    <>
    <SubBanner name="Our Menu" page="Menu"/>
    <section className="menu-heading">
      <div className="container">
        <div className="text-center">
            <p className="section-title mb-2">● Taste The Best</p>
            <h1 className="sec-head">OUR <span> EXCLUSIVE</span> MENU</h1>
            <p>Indulge in handcrafted dishes made with passion and premium ingredients. From bold starters to refreshing beverages, our menu is curated to offer flavors you won’t forget. Each plate may surprise your palate and elevate your dining journey.</p>
          </div>
          <div className="menu-cat">
            <div className="row">
              <div className="col-md-2 col-6">
                <div className="text-center" onClick={() =>
      document.getElementById("starters")?.scrollIntoView({ behavior: "smooth" })
    }>
                  <img src="./images/cat-1.png" alt="category" />
                  <h3 className="mt-4">Starters</h3>
                </div>
              </div>
              <div className="col-md-2 col-6">
                <div className="text-center" onClick={() =>
      document.getElementById("veg-platter")?.scrollIntoView({ behavior: "smooth" })
    }>
                  <img src="./images/cat-2.png" alt="category" />
                  <h3 className="mt-4">Veg Platter</h3>
                </div>
              </div>
              <div className="col-md-2 col-6">
                <div className="text-center" onClick={() =>
      document.getElementById("seafoods")?.scrollIntoView({ behavior: "smooth" })
    }>
                  <img src="./images/cat-3.png" alt="category" />
                  <h3 className="mt-4">Sea Foods</h3>
                </div>
              </div>
              <div className="col-md-2 col-6">
                <div className="text-center" onClick={() =>
      document.getElementById("desserts")?.scrollIntoView({ behavior: "smooth" })
    }>
                  <img src="./images/cat-4.png" alt="" srcset="" />
                  <h3 className="mt-4">Desserts</h3>
                </div>
              </div>
              <div className="col-md-2 col-6">
                <div className="text-center" onClick={() =>
      document.getElementById("beverages")?.scrollIntoView({ behavior: "smooth" })
    }>
                  <img src="./images/cat-5.png" alt="" srcset="" />
                  <h3 className="mt-4">Bevarages</h3>
                </div>
              </div>
              <div className="col-md-2 col-6">
                <div className="text-center" onClick={() =>
      document.getElementById("salads-&-soups")?.scrollIntoView({ behavior: "smooth" })
    }>
                  <img src="./images/cat-6.png" alt="" srcset="" />
                  <h3 className="mt-4">Salads & Soups</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section className="menu-body">
        {categories.map((cat,index) => (
          <div className="menu-type">
          <div className="container">
        <div className="row" key={index} id={cat.replace(/\s+/g, "-").toLowerCase()}>
          <div className="col-md-2">
              <p className="section-title mb-2">● Menu & Pricing</p>
              <h2 className="menu-head">{cat}</h2>
          </div>                                   
          <div className="col-md-10 row">
             {foodItems
                  .filter(item => item.cat === cat) 
                  .map((item,index) => (
                <div className="col-md-6" key={index}>
                  <Link to={`/menu/${item.id}`}>
                  <div className="prod-items" data-aos="zoom-in"  data-aos-offset="100" data-aos-delay="100">
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
        </div>
        ))}
      
    </section>
    </>
  );
}

export default Menu;
