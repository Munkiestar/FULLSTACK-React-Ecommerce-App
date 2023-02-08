import "./index.css";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails.jsx";
import Checkout from "./scenes/checkout/Checkout.jsx";
import Confirmation from "./scenes/checkout/Confirmation.jsx";
import CartMenu from "./scenes/global/CartMenu.jsx";

// start every page from the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </Router>
    </div>
  );
}

export default App;
