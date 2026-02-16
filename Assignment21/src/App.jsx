import "./App.css";

import { useState } from "react";   // ✅ ADD THIS
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import DashboardHome from "./pages/DashboardHome";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Protected from "./pages/Protected";
import FetchUsers from "./pages/FetchUser";
import AxiosCRUD from "./pages/AxiosCRUD";
import ErrorUI from "./pages/ErrorUI";
import Blog from "./pages/Blog";
import Theme from "./pages/Theme";
import Ecommerce from "./pages/ECommerce";

/* ✅ NEW IMPORTS */
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);   // ✅ ADD STATE

  return (
    <Routes>

      {/* ✅ Main Portal */}
      <Route path="/" element={<Home />} />

      {/* ✅ Login System 👑 */}
      <Route path="/login" element={
        <Login setIsLoggedIn={setIsLoggedIn} />
      } />

      <Route path="/profile" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Profile setIsLoggedIn={setIsLoggedIn} />
        </ProtectedRoute>
      } />

      {/* ✅ Exercise Pages */}
      <Route path="/company/*" element={<Company />} />

      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/products/*" element={<Products />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/fetch-users" element={<FetchUsers />} />
      <Route path="/axios" element={<AxiosCRUD />} />
      <Route path="/error-ui" element={<ErrorUI />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/ecommerce/*" element={<Ecommerce />}/>
 


    </Routes>
  );
}

export default App;
