import { useParams } from "react-router-dom";
import recipes from "../assets/recipes.json";

export default function RecipeDetails() {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.id == recipeId);

  return (
    <div className="RecipeDetail">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} />
      <div>
        <p>Calories: {recipe.calories}</p>
        <p>Servings: {recipe.servings}</p>
      </div>
    </div>
  );
}
