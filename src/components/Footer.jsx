import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pt-5">
      <div className="container mb-3">
        <div className="row text-white">
          <div className="col-md-4 mb-3">
            <Link className="d-flex align-items-center text-decoration-none" to="/">
              <img src="/images/logo.png" alt="Logo" width={80}/>
              <span className="logo-name">SavoryNest</span>
            </Link>
            <p className="my-4">At SavoryNest, we serve more than just meals — we create memorable dining moments. Join us for a flavorful experience crafted with passion and care.</p>
            <img src="/images/cards.png" alt="card" width={200} />
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="footer-head">Quick Links</h5>
            <ul className="list-unstyled mt-4">
              <li className="mb-2"><Link className="text-light text-decoration-none" to="/">Home</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" to="/menu">Menu</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" to="/cart">Cart</Link></li>
              <li><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="footer-head">Contact Info</h5>
            <ul className="list-unstyled mt-4 footer-contact">
              <li className="mb-2"><img src="./images/loc.png" alt=" " width={30}/><span>2910 Grandview Blvd, Seattle, XYZ 00000</span></li>
              <li className="mb-2"><img src="./images/phone.png" alt=" " width={30}/><span> +1 000 000 0000</span></li>
              <li className="mb-2"><img src="./images/mail.png" alt=" " width={30}/><span>support@savorynest.com</span></li>
            </ul>
          </div>
        </div>
        
        
      </div>
      <div className="footer-bottom">
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} SavoryNest. All Rights Reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
