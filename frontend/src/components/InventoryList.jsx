import React from "react";

function InventoryList({ inventory }) {
  return (
    <div className="list">
      <h2>Inventory List</h2>
      <ul>
        {inventory.length > 0 ? (
          inventory.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity}
            </li>
          ))
        ) : (
          <p>No inventory added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default InventoryList;
