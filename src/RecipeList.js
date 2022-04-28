import React from "react";
import "./App.css"

function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  const deletePost = (indexToDelete) =>
      setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );
  
  const rows = recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img
          src={photo}
          object-fit= "scale-down"
          width="100%"
          height="100%"
          />
      </td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td>
        <button name="delete" onClick={(event) => {deletePost(index)}} >
          Delete
        </button>
      </td>
    </tr>
    
  ));
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
