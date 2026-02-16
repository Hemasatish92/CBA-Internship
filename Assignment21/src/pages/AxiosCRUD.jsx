import axios from "axios";
import { useEffect, useState } from "react";

function AxiosCRUD() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  if (loading) {
    return (
      <div className="center-page">
        <div className="spinner"></div>
        <p>Loading Posts...</p>
      </div>
    );
  }

  return (
    <div className="posts-page">
      <h2>📝 Posts Manager</h2>

      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <p>{post.title}</p>

            <button
              className="delete-btn"
              onClick={() => deletePost(post.id)}
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AxiosCRUD;
