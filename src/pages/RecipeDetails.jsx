import { Link, useParams } from "react-router-dom";
import recipes from "../assets/recipes.json";
import UpdatingForm from "../components/UpdatingForm";

export default function RecipeDetails({ callbackToUpdate }) {
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
      <Link to="/">Back to Homepage</Link>
      <UpdatingForm
        title={recipe.name}
        servings={recipe.servings}
        image={recipe.image}
        calories={recipe.calories}
        onRecipeUpdate={callbackToUpdate}
      />
    </div>
  );
}
