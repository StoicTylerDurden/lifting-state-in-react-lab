const BurgerStack = ({ stack, handleRemoveItem }) => {
    return (
      <ul>
        {stack.map((layer, index) => (
          <li key={index} style={{ backgroundColor: layer.color }}>
            {layer.name}
            <button type="button" onClick={() => handleRemoveItem(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  