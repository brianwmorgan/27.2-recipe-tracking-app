import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ recipes, setRecipes }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [newRecipe, setNewRecipe] = useState(initialFormState);

  const handleChange = ({ target }) => {
    const value = target.value;
    setNewRecipe({
      ...newRecipe,
      [target.name]: value,
    });
  };

  const handleCreate = (event) => {
    event.preventDefault();
    setRecipes([...recipes, newRecipe]);
    setNewRecipe(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={newRecipe.name}
                  placeholder="Name"
                  required="true"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  value={newRecipe.cuisine}
                  placeholder="Cuisine"
                  required="true"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type=""
                  name="photo"
                  value={newRecipe.photo}
                  placeholder="URL"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  value={newRecipe.ingredients}
                  placeholder="Ingredients"
                  required="true"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  value={newRecipe.preparation}
                  placeholder="Preparation"
                  required="true"
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
