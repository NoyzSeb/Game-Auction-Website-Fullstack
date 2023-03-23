import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [itemList, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/itemList')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="itemList">
      <header className="App-header">
        <div className="itemList-intro">
          <h2>Item List</h2>
          {itemList.map(itemList =>
            <div key={itemList.id}>
              {itemList.name}
            </div>  
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
