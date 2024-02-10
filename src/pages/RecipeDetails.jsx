import { Link, useParams } from "react-router-dom";
import UpdatingForm from "../components/UpdatingForm";

export default function RecipeDetails({ recipes, onRecipeUpdate }) {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.id == recipeId);
  console.log(recipe);

  return (
    <div className="RecipeDetail">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} />
      <div>
        <p>Calories: {recipe.calories}</p>
        <p>Servings: {recipe.servings}</p>
        <button>Edit</button>
      </div>
      <UpdatingForm recipe={recipe} onRecipeUpdate={onRecipeUpdate} />
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}
