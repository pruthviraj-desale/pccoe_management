import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList";
import Register from "./components/Register"

function App() {
  const [events, setEvents] = useState([]);
  const [inventory, setInventory] = useState([]);

  const addEvent = (newEvent) => setEvents([...events, newEvent]);
  const addInventoryItem = (newItem) => setInventory([...inventory, newItem]);

  return (
    <div className="app-container">
      <h1>Event Inventory Management</h1>
      <div className="forms-container">
        <EventForm addEvent={addEvent} />
        <InventoryForm addInventoryItem={addInventoryItem} />
      </div>
      <div className="lists-container">
        <EventList events={events} />
        <InventoryList inventory={inventory} />
      </div>
      <Register/>
    </div>
  );
}

export default App;
