import styles from "./Blog.module.css";

function Blog() {
  const featured = true;

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
        
        {featured && <span className={styles.badge}>⭐ Featured</span>}

        <h3>🚀 Modern UI Design Trends</h3>

        <p>
          Discover the latest UI/UX strategies used in modern web applications.
        </p>

        <button>Read More</button>
      </div>
    </div>
  );
}

export default Blog;
