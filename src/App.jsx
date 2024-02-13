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
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  function toggleFormVisibility() {
    setIsFormVisible(!isFormVisible);
  }

  function toggleSidebarVisibility() {
    setIsSideBarVisible(!isSideBarVisible);
  }

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
        // Checks if the current recipe's ID matches the ID of the updatedRecipe.
        if (recipe.id === updatedRecipe.id) {
          console.log("updating...");
          // Returns the updatedRecipe object to replace the current recipe in the new array.
          return updatedRecipe;
        }

        // For any recipe that does not match the ID, returns the recipe unmodified.
        return recipe;
      })
    );
    toggleFormVisibility();
  };
  return (
    <div className="Wrapper">
      <NavBar toggleSidebarVisibility={toggleSidebarVisibility} />s
      <div className={isSideBarVisible ? "Main grid" : "Main"}>
        {isSideBarVisible && <SideBar />}

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
                toggleFormVisibility={toggleFormVisibility}
                isFormVisible={isFormVisible}
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
