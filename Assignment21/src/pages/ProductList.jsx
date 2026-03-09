import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Shop.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.grid}>
      {products.map(product => (
        <Link to={`${product.id}`} key={product.id} className={styles.card}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <p>₹ {Math.round(product.price * 80)}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
