import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Shop.module.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading Product...</p>;

  return (
    <div className={styles.details}>
      <img src={product.image} alt="" />

      <div>
        <h2>{product.title}</h2>
        <p>₹ {Math.round(product.price * 80)}</p>

        <Link to="/ecommerce/products">← Back</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
