import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart.quantity === 1) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  // Function to delete a specific item from the cart
  const deleteItemFromCart = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId); // Remove the item completely
    });
  };

  return (
    <div style={{ display: "flex", gap: "2em", padding: "3em" }}>
      <div style={{ flex: "1" }}>
        <ProductList addToCart={addToCart} />
      </div>
      <div style={{ display:"1", maxWidth: "300px" }}>
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          decreaseQuantity={decreaseQuantity}
          deleteItemFromCart={deleteItemFromCart} // Pass the delete function to Cart
        />
      </div>
    </div>
  );
}

export default App;
