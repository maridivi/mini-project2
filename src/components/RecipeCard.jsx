import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RecipeCard({ image, name, calories, servings, id, callbackToDelete }) {
  return (
    <div className="RecipeBox">
      <Link to={`/recipes/${id}`}>
        {" "}
        <img src={image}></img>
      </Link>
      <h2>{name} </h2>
      {/* <p>Calories: {calories} </p>
      <p>Servings: {servings} </p> */}
     
      <button onClick={() => {callbackToDelete(id)}}>Delete</button>
    </div>
  );
}

export default RecipeCard;
