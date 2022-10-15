import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (recipeToAdd) => setRecipes([...recipes, recipeToAdd]);

  const deleteRecipe = (recipeToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== recipeToDelete)
    );
  };

  return (
    <div className="App">
      <header>
        <h1
          style={{
            fontFamily: "Playfair Display SC",
            textAlign: "center",
            fontSize: "64px",
          }}
        >
          Food for Thought
        </h1>
      </header>
      <h2
        style={{
          fontFamily: "Playfair Display SC",
          textAlign: "center",
        }}
      >
        Recipe Tracker
      </h2>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
