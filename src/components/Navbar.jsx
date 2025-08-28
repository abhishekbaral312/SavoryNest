import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container d-flex justify-content-between align-items-center">
    <Link className="navbar-brand d-flex align-items-center" to="/">
      <img src="./images/logo.png" alt="Logo"/>
      <span className="logo-name">SavoryNest</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
      </ul>
    </div>
    <div className="d-none d-md-flex">
      <Link to="menu">
      <button className="order-btn">
        Order Now →
      </button>
      </Link>
      
    </div>
  </div>
</nav>
  );
}

export default NavbarComponent;
