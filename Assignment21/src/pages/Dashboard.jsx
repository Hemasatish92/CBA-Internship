import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h2>Admin Panel</h2>

        <nav>
          <NavLink to="/dashboard" end>Dashboard</NavLink>
          <NavLink to="/dashboard/users">Users</NavLink>
          <NavLink to="/dashboard/reports">Reports</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
      </aside>

      <main className="dashboard-content">
        <Outlet />   {/* 👑 CRITICAL */}
      </main>

    </div>
  );
}

export default Dashboard;
