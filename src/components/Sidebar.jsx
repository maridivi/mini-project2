import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="Sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default SideBar;
