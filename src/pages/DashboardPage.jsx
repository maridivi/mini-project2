import AddRecipe from "../components/AddRecipe";
import Recipes from "../components/Recipes";
import recipes from "../assets/recipes.json";
import { useState } from "react";

export default function DashboardPage() {
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
  
  
  return (
    <div>
      <Recipes recipes={displayedRecipes} callbackToDelete={deleteRecipe} />
      <AddRecipe onAddFood={handleAddFood} />
    </div>
  );
}
