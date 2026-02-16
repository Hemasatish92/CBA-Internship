import { Link, Routes, Route, useParams } from "react-router-dom";

const productData = [
  { id: 1, name: "Laptop", price: "₹75,000" },
  { id: 2, name: "Smartphone", price: "₹45,000" },
  { id: 3, name: "Headphones", price: "₹5,000" }
];

function ProductList() {
  return (
    <div className="products-page">
      <h2>🛍 Product Listing</h2>

      <div className="product-grid">
        {productData.map(product => (
          <Link to={`${product.id}`} key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <span>View Details →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();

  const product = productData.find(p => p.id === Number(id));

  if (!product) return <h3>Product Not Found</h3>;

  return (
    <div className="details-page">
      <div className="details-card">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>

        <p>
          This is a premium {product.name} with excellent performance and modern design.
        </p>

        <Link to="/products" className="back-btn">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}

function Products() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path=":id" element={<ProductDetails />} />
    </Routes>
  );
}

export default Products;
