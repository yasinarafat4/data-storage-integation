// use Local storage to manage cart data
/* Normal Way
const addToDb = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};
*/

// Organize way store an object
const addToDb = (id) => {
  let shoppingCart;

  // get the shopping cart
  const storedItem = localStorage.getItem("shopping-cart");
  if (storedItem) {
    shoppingCart = JSON.parse(storedItem);
  } else {
    shoppingCart = {};
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// Remove data

const removeFromDb = (id) => {
  // get the shopping cart
  const storedItem = localStorage.getItem("shopping-cart");

  if (storedItem) {
    const shoppingCart = JSON.parse(storedItem);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// delete full shopping cart
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};
export { addToDb, removeFromDb, deleteShoppingCart };
