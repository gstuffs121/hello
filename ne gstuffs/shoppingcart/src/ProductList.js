import React from "react";

const products = [
  { id: 1, name: "Product A", price: 10.000, image: "Images/33.jpg" },
  { id: 2, name: "Product B", price: 15.000, image: "Images/33.jpg" },
  { id: 3, name: "Product C", price: 20, image: "Images/33.jpg" },
  { id: 4, name: "Product D", price: 25, image: "Images/33.jpg" },
  { id: 5, name: "Product E", price: 30, image: "Images/33.jpg" },
  { id: 6, name: "Product F", price: 35, image: "Images/33.jpg" },
  { id: 7, name: "Product g", price: 35, image: "Images/33.jpg" },
  { id: 8, name: "Product h", price: 35, image: "Images/33.jpg" },
  { id: 9, name: "Product i", price: 35, image: "Images/33.jpg" },
  
];

function ProductList({ addToCart }) {
    const formatCurrency=(amount) =>{
        return new Intl.NumberFormat("en-IN",{
            style:"currency",
            currency:"INR"
        }).format(amount);
    }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Shopping Cart</h2>
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)",  // 3 columns per row
          gap: "1em",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "2px solid #ccc",
              padding: "1em",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px" }}
            />
            <div>{product.name} -{formatCurrency(product.price)}</div>
            <button onClick={() => addToCart(product)} style={{ marginTop: "0.5em" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
