
import RecipeCard from "./RecipeCard";

function Recipes({recipes, callbackToDelete}) {

 

  return (
    <div className="RecipeContent">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} image={recipe.image} id={recipe.id} callbackToDelete={callbackToDelete} />
      ))}
    </div>
  );
}

export default Recipes;
