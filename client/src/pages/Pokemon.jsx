import { useEffect, useState } from "react";

// Important for useQuery: We import the useQuery hook from @apollo/client
import { useQuery } from "@apollo/client";

// import "insert exported pokemon file" from "../components/Pokemon"

// Important for useQuery: We import the specific query we'd like to perform from our queries.js utility
// import {insert pokemon query} from "../utils/queries"

// product img and alt will need to be added on line 39-40(will need to add more)
// the quantity and value will need to change on lines 55-90
const Pokemon = () => {
  const [selectedProduct, setSelectedProduct] = useState("Pack");
  const [selectedPrice, setSelectedPrice] = useState(5);
  const [selectedQty, setSelectedQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selectedPrice * selectedQty);

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    if (e.target.value === "Pack") {
      setSelectedPrice(5);
    } else {
      setSelectedPrice(80);
    }
  };

  const handleQtyChange = (e) => {
    setSelectedQty(e.target.value);
  };

  useEffect(() => {
    setTotalPrice(selectedPrice * selectedQty);
  }, [selectedPrice, selectedQty]);

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="product-details">
        <h1>Product Name</h1>
        <p>Price: ${selectedPrice}</p>
        <label htmlFor="product-select">Product:</label>
        <select
          id="product-select"
          value={selectedProduct}
          onChange={handleProductChange}
        >
          <option value="Pack">Pack</option>
          <option value="Box">Box</option>
        </select>
        <label htmlFor="qty-select">Quantity:</label>
        <select id="qty-select" value={selectedQty} onChange={handleQtyChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>Total Price: ${totalPrice}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Pokemon;
