const IngredientList = ({ ingredients, handleAddItem }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button type="button" onClick={() => handleAddItem(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  