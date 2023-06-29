import { useState, useMemo } from "react";
import "./App.css";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);

  const [newItem, setNewItem] = useState<string>("");

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const countItemsWithOne = useMemo(() => {
    return items.filter((item) => item.includes("1")).length;
  }, [items]);

  return (
    <>
      <div className="container">
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button onClick={addItemToList}>Add Item</button>
        <ul>
          {items.map((item) => {
            return <Item key={item} title={item} />;
          })}
        </ul>
        <p>Count: {countItemsWithOne}</p>
      </div>
    </>
  );
}

export default App;
