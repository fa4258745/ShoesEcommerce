import { NavLink, Outlet } from "react-router-dom";
import "../css/admindashboard.css";

const AdminDashBoard = () => {
  return (
    <div className="admin-wrapper">
      
      {/* Top Header */}
      <header className="admin-header">
        <h2>Admin Dashboard</h2>
        <div className="admin-user">
          Welcome, <span>{localStorage.getItem("adminid")}</span>
        </div>
      </header>

      {/* Main Layout */}
      <div className="admin-layout">

        {/* Sidebar */}
        <aside className="admin-sidebar">
          <h3 className="brand">MyShoes</h3>

          <nav>
            <NavLink to="uploadproduct" className="menu-link">
              Upload Product
            </NavLink>

            <NavLink to="customerorder" className="menu-link">
              Customer Orders
            </NavLink>

            <NavLink to="products" className="menu-link">
              Manage Products
            </NavLink>

            <NavLink to="users" className="menu-link">
              Users
            </NavLink>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="admin-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminDashBoard;
