import recipes from "../assets/recipes.json"
import { useState } from "react";
import RecipeCard from "./RecipeCard";

function Recipes () {

    return (
        <div className="RecipeContent">
        {recipes.map((recipe) => (
            
          <RecipeCard image={recipe.image} />

        ))}

        
        </div>
    )

}


export default Recipes;