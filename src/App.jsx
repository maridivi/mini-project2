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
import { useState } from "react";
import recipes from "./assets/recipes.json";

function App() {
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);
  const updateRecipe = (recipeId, newObj) => {
    setDisplayedRecipes(
      displayedRecipes.map((recipe) => {
        if (recipe.id === recipeId) {
          return { ...recipe, newObj };
        }
      })
    );
  };
  return (
    <div className="Wrapper">
      <NavBar />
      <div className="Main">
        <SideBar />

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/recipes/:recipeId"
            element={<RecipeDetails callbackToUpdate={updateRecipe} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
