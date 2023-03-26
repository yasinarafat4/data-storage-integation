import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";

const containerStyles = {
  border: "2px solid red",
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
};
const DisplayCosmetics = (props) => {
  const { _id, name, price } = props.disCosmetic;

  /* Less organized way
 const addToCart = (id) => {
    localStorage.setItem(id, price);
  };
  */

  //organized way
  // adding cart button function
  const addToCart = (id) => {
    addToDb(id);
  };

  // Remove cart data to local storage button
  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  //   Wrapper function
  const addToCartWithWrapper = () => addToCart(_id);
  return (
    <div style={containerStyles}>
      <h3>Id: {_id}</h3>
      <h2>Product Name: {name}</h2>
      <h2>Price: {price}</h2>
      <button
        style={{ padding: "10px", borderRadius: "10px", marginRight: "10px" }}
        onClick={addToCartWithWrapper}
      >
        Add to cart: Direct
      </button>
      <button
        style={{ padding: "10px", borderRadius: "10px", marginRight: "10px" }}
        onClick={() => addToCart(_id)}
      >
        Add to cart: Shortcut
      </button>
      <button
        style={{ padding: "10px", borderRadius: "10px", marginRight: "10px" }}
        onClick={() => removeFromCart(_id)}
      >
        Remove From Cart
      </button>
    </div>
  );
};

export default DisplayCosmetics;
