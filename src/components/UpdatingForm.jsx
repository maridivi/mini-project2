/* eslint-disable react/prop-types */
import { useState } from "react";

function UpdatingForm({ recipe, onRecipeUpdate }) {
  const [formValues, setFormValues] = useState({
    name: recipe.name,
    calories: recipe.calories,
    image: recipe.image,
    servings: recipe.servings,
  });

  const handleValueChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeUpdate({
      ...recipe,
      name: formValues.name,
      calories: formValues.calories,
      image: formValues.image,
      servings: formValues.servings,
    });

    return formValues;
  };

  return (
    <form onSubmit={handleSubmit} className="UpdatingForm">
      <div className="UpdateInput">
        <label >Name: </label>
          
          <input
            type="text"
            name="name"
            required
            placeholder={formValues.name}
            value={formValues.name}
            onChange={handleValueChanges}
          />
       
      </div>

      <div className="UpdateInput">
        <label>
          Calories:
        </label>
        
          <input
            type="text"
            name="calories"
            required
            placeholder={formValues.calories}
            value={formValues.calories}
            onChange={handleValueChanges}
          />
      </div>

      <div className="UpdateInput">
        <label> Image: </label>
          <input
            type="url"
            name="image"
            required
            placeholder={formValues.image}
            value={formValues.image}
            onChange={handleValueChanges}
          />
        
      </div>

      <div className="UpdateInput">
        <label> Servings:  </label>
          <input
            type="text"
            name="servings"
            required
            placeholder={formValues.servings}
            value={formValues.servings}
            onChange={handleValueChanges}
          />
       
      </div>

      <button>Save</button>
    </form>
  );
}

export default UpdatingForm;
