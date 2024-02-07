import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import SideBar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import RecipeDetails from "./pages/RecipeDetails";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="Wrapper">
      <NavBar />
      <div className="Main">
        <SideBar />

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
