import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import SideBar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import RecipeDetails from "./pages/RecipeDetails";

import NotFound from "./pages/NotFound";
import { useState } from "react";
import recipes from "./assets/recipes.json";
import RecipesList from "./components/RecipesList";

function App() {
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);

  function handleAddFood(newFood) {
    setDisplayedRecipes([...displayedRecipes, newFood]);
  }
  const deleteRecipe = (recipeId) => {
    const newList = displayedRecipes.filter((recipeObj) => {
      return recipeObj.id !== recipeId;
    });
    setDisplayedRecipes(newList);
  };

  const updateRecipe = (updatedRecipe) => {
    console.log("updating recipe", updatedRecipe.id);
    setDisplayedRecipes((currentRecipes) =>
      currentRecipes.map((recipe) => {
        if (recipe.id === updatedRecipe.id) {
          console.log("updating...");
          return updatedRecipe;
        }
        return recipe;
      })
    );
  };
  return (
    <div className="Wrapper">
      <NavBar />
      <div className="Main">
        <SideBar />

        <Routes>
          <Route
            path="/"
            element={
              <RecipesList
                recipes={displayedRecipes}
                callbackToDelete={deleteRecipe}
                handleAddFood={handleAddFood}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/recipes/:recipeId"
            element={
              <RecipeDetails
                recipes={displayedRecipes}
                onRecipeUpdate={updateRecipe}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
