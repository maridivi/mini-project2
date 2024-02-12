import { useState } from "react";

function AddRecipe({onAddFood}) {

    const [newRecipe, setNewRecipe] = useState({title:"", calories:"", image:"", servings:""});


    const handleValueChanges = e => { 
        setNewRecipe({
          ...newRecipe,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood({
      id: Date.now(),
      name: newRecipe.title,
      calories: newRecipe.calories,
      image: newRecipe.image,
      servings: newRecipe.servings
    });
    setNewRecipe({title:"", calories:"", image:"", servings:""});
  };
    
  return (
    <form onSubmit={handleSubmit} className="UpdatingForm">
       <div className="UpdateInput">
       <label>Name: </label>
        <input
          type="text"
          name="title"
          required
          placeholder="Pizza"
          value={newRecipe.title}
          onChange={handleValueChanges}
        />
         </div>
      
      <div className="UpdateInput">
      <label>Calories: </label>
        <input
          type="text"
          name="calories"
          required
          placeholder="6"
          value={newRecipe.calories}
          onChange={handleValueChanges}
        />
         </div>
      
      <div className="UpdateInput">
      <label>Image: </label>
        <input
          type="url"
          name="image"
          required
          placeholder="Recipe Image"
          value={newRecipe.image}
          onChange={handleValueChanges}
        />
         </div>
      
      <div className="UpdateInput">
      <label>Servings:  </label>
        <input
          type="text"
          name="servings"
          required
          placeholder="4"
          value={newRecipe.servings}
          onChange={handleValueChanges}
        />
         </div>
     

      <button>Create</button>
    </form>
  );
}


export default AddRecipe;
