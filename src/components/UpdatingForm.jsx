import { useState } from "react";

function UpdatingForm({ title, image, servings, calories, onRecipeUpdate }) {
  const [initialValues, setInitialValues] = useState({
    title: title,
    calories: calories,
    image: image,
    servings: servings,
  });

  const handleValueChanges = (e) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeUpdate({
      ...initialValues,

      name: initialValues.title,
      calories: initialValues.calories,
      image: initialValues.image,
      servings: initialValues.servings,
    });

    return initialValues;
    //  setNewRecipe({ title: "", calories: "", image: "", servings: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          required
          placeholder={initialValues.title}
          value={initialValues.title}
          onChange={handleValueChanges}
        />
      </label>

      <label>
        Calories:
        <input
          type="text"
          name="calories"
          required
          placeholder={initialValues.calories}
          value={initialValues.calories}
          onChange={handleValueChanges}
        />
      </label>

      <label>
        Image:
        <input
          type="url"
          name="image"
          required
          placeholder={initialValues.image}
          value={initialValues.image}
          onChange={handleValueChanges}
        />
      </label>

      <label>
        Servings:
        <input
          type="text"
          name="servings"
          required
          placeholder={initialValues.servings}
          value={initialValues.servings}
          onChange={handleValueChanges}
        />
      </label>

      <button>Save</button>
    </form>
  );
}

export default UpdatingForm;
