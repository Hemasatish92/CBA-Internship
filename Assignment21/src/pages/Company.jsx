import { NavLink, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Our Company</h1>
      <p>We build amazing digital experiences ✨</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>We are passionate developers creating modern solutions.</p>
    </div>
  );
}

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="services">
        <div className="service-card">Web Development</div>
        <div className="service-card">UI/UX Design</div>
        <div className="service-card">Cloud Solutions</div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Email: contact@company.com</p>
    </div>
  );
}

function Company() {
  return (
    <div className="company-container">
      <nav className="navbar">
        <div className="logo">🚀 Company</div>

        <div className="nav-links">
<NavLink to="/company" end>Home</NavLink>
<NavLink to="/company/about">About</NavLink>
<NavLink to="/company/services">Services</NavLink>
<NavLink to="/company/contact">Contact</NavLink>

        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default Company;
