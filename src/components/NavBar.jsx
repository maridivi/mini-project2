import { IoMdMenu } from "react-icons/io";

function NavBar({ toggleSidebarVisibility }) {
  return (
    <div className="Navbar">
      <button
        onClick={toggleSidebarVisibility}
        style={{ backgroundColor: "transparent" }}
      >
        <IoMdMenu size={40} />
      </button>
      <h1>M & M's Recipes</h1>
    </div>
  );
}

export default NavBar;
