import AddRecipe from "./AddRecipe";
import RecipeCard from "./RecipeCard";

function RecipesList({ recipes, callbackToDelete, handleAddFood }) {
  return (
    <div className="RecipeList">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="RecipeContent">
          <RecipeCard
            name={recipe.name}
            image={recipe.image}
            id={recipe.id}
            callbackToDelete={callbackToDelete}
          />
          <button
            onClick={() => {
              callbackToDelete(recipe.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <AddRecipe onAddFood={handleAddFood} />
    </div>
  );
}

export default RecipesList;
