import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RecipeCard({ image, name, id }) {
  return (
    <div className="RecipeBox">
      <Link to={`/recipes/${id}`}>
        {" "}
        <img src={image}></img>
      </Link>
      <h2>{name} </h2>

      {/* <button onClick={() => {callbackToDelete(id)}}>Delete</button> */}
    </div>
  );
}

export default RecipeCard;
