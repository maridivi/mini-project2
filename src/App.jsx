import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div>
      <NavBar />
      <Recipes />
      <SideBar />
      <Footer />

    </div>
  );
}

export default App;
