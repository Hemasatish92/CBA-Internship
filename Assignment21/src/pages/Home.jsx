import { Link } from "react-router-dom";

function Home() {
  const projects = [
    { title: "Company Website", path: "/company" },
    { title: "Nested Dashboard", path: "/dashboard" },
    { title: "Product Routing", path: "/products" },
    { title: "Protected Route", path: "/protected" },
    { title: "Fetch API Users", path: "/fetch-users" },
    { title: "Axios CRUD", path: "/axios" },
    { title: "API Error UI", path: "/error-ui" },
    { title: "Blog Card", path: "/blog" },
    { title: "Theme Toggle", path: "/theme" },
    { title: "Mini E-commerce", path: "/ecommerce" }
  ];

  return (
    <div className="portal">
      <h2>React Practice Portal</h2>

      <div className="horizontal-scroll">
        {projects.map((project, index) => (
          <Link to={project.path} key={index} className="card">
            <h3>{project.title}</h3>
            <p>Click to open</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
