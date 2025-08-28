import foodItems from "../data/foodData";
import SubBanner from "../components/Otherban";
import { Link } from "react-router-dom";

function Menu() {
 const categories = [...new Set(foodItems.map((item) => item.cat))];
 
  return (
    <>
    <SubBanner name="Our Menu" page="Menu"/>
    <section className="menu-body">
        {categories.map((cat,index) => (
          <div className="menu-type">
          <div className="container">
        <div className="row" key={index}>
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
