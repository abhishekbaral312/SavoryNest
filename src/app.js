import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Details = lazy(() => import("./pages/Details"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ThankYou = lazy(() => import("./pages/Thankyou"));
const Contact = lazy(() => import("./pages/Contact"));

function PageWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minTime = 2000; 
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, minTime);

    return () => clearTimeout(timer);
  }, [location]); 

  return <>{loading ? <Preloader /> : children}</>;
}

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);


  return (
    
    <Router>
      <ScrollToTop/>
      <PageWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </PageWrapper>
    </Router>
    
  );
}

export default App;

