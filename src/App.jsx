// src/App.jsx
import { useState } from "react";
import BurgerStack from "./components/BurgerStack";
import IngredientList from "./components/IngredientList";
import "./App.css";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

  const addIngredient = (Ingredient) => {
    setBurgerIngredients([...burgerIngredients, Ingredient]);
  };

  const removeIngredient = (ingredientIndex) => {
    setBurgerIngredients(burgerIngredients.filter((_, i) => i !== ingredientIndex));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          handleAddItem={addIngredient}
        />
        <BurgerStack
          stack={burgerIngredients}
          handleRemoveItem={removeIngredient}
        />
      </section>
    </main>
  );
};

export default App;
