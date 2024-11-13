import React from "react";

function Cart({ cartItems, addToCart, decreaseQuantity, deleteItemFromCart }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Format currency to display in INR (Indian Rupees)
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR"
    }).format(amount);
  };

  return (
    <div style={{ border: "2px solid #ccc", padding: "1em", borderRadius: "8px" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1em",
                padding: "1em",
                border: "2px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <span style={{ flex: "1" }}>{item.name}</span>
              <span style={{ margin: "0 1em" }}>
                {formatCurrency(item.price)} {/* Display Indian Rupee symbol */}
              </span>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <span style={{ margin: "0 0.5em" }}>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
              {/* Delete button */}
              <button
                onClick={() => deleteItemFromCart(item.id)}
                style={{
                  marginLeft: "1em",
                  padding: "0.5em 1em",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
          <h3>Total: {formatCurrency(total)}</h3> {/* Display formatted total */}
        </div>
      )}
    </div>
  );
}

export default Cart;
