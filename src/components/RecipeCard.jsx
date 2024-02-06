
function RecipeCard ({image,name,calories,servings}) {
    return ( 
    <div className="RecipeBox">
            <img src={image} ></img>
            <h2>{name} </h2>
            <p>Calories: {calories} </p>
            <p>Servings: {servings} </p>
            <button>Delete</button>
     </div>
)
}



export default RecipeCard;