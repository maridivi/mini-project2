import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RecipeCard({ image, name, id }) {
  return (
      <Link to={`/recipes/${id}`} className="BoxImage">
      <div className="RecipeBox">
      <h2>{name}</h2>
        {" "}
        <img src={image}></img>
        </div>
      </Link>
      
    
  );
}

export default RecipeCard;
