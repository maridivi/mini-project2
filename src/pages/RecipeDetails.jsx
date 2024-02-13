import { Link, useParams } from "react-router-dom";
import UpdatingForm from "../components/UpdatingForm";

export default function RecipeDetails({
  recipes,
  onRecipeUpdate,
  isFormVisible,
  toggleFormVisibility,
}) {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.id == recipeId);
  console.log(recipe);

  return (
    <div className="RecipePage">
      <div className="RecipeDetail">
        <h1>{recipe.name}</h1>
        <img src={recipe.image} />
        <div>
          <p>
            <b>Calories</b>: {recipe.calories} kcal
          </p>
          <p>
            <b>Servings</b>: {recipe.servings}
          </p>
          <button onClick={toggleFormVisibility}>Edit</button>
        </div>
        <Link className="HomeLink" to="/">
          Back to Homepage
        </Link>
      </div>

      {isFormVisible && (
        <UpdatingForm recipe={recipe} onRecipeUpdate={onRecipeUpdate} />
      )}
    </div>
  );
}
