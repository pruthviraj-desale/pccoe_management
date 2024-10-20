import React, { useState } from "react";

function InventoryForm({ addInventoryItem }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && itemQuantity > 0) {
      addInventoryItem({ name: itemName, quantity: itemQuantity });
      setItemName("");
      setItemQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Inventory Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(parseInt(e.target.value))}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default InventoryForm;
