import "./App.css";
import { CartProvider } from "./assets/component/cartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomizedBadges from "./assets/component/CartIcon";
import ProductSection from "./assets/component/ProductSection";
import CartSection from "./assets/component/CartSection";

function App() {
  return (
    <CartProvider>
      <Router>
        <CustomizedBadges />
        <Routes>
          <Route path="/" element={<ProductSection />} />
          <Route path="/cart" element={<CartSection />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
