import recipes from "../assets/recipes.json";

import RecipeCard from "./RecipeCard";

function Recipes() {
  return (
    <div className="RecipeContent">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} image={recipe.image} id={recipe.id} />
      ))}
    </div>
  );
}

export default Recipes;
