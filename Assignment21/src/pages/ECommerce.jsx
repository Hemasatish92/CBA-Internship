import { Link, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function Ecommerce() {
  return (
    <div className="shop-container">

      {/* ✅ Navbar */}
      <nav className="shop-nav">
        <Link to="">Home</Link>
        <Link to="products">Products</Link>
        <Link to="cart">Cart</Link>
      </nav>

      {/* ✅ Page Content */}
      <div className="shop-content">
        <Routes>
          <Route path="/" element={
            <div className="shop-hero">
              <h1>🛍 Mini Store</h1>
              <p>Discover amazing products at great prices ✨</p>
            </div>
          } />

          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>

    </div>
  );
}

export default Ecommerce;
