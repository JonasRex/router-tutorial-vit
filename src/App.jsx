import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "",
            };
          }}
          to="/invoices"
        >
          Invoices
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "",
            };
          }}
          to="/expenses"
        >
          Expenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}




