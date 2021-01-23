import "./styles.css";
import React, { useState } from 'react';

function Column(props) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editing, setEditing] = useState(false);

  const addItem = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        title: title,
        body: body
      }
    ]);
    setTitle("");
    setBody("");
    setEditing(false);
  };


  const deleteItem = (e) => {
   const title = e.target.getAttribute("title")
    setItems(items.filter(item => item.title !== title));
  };

  return <div className="column">
        <h1>{props.header}</h1>
        {!editing && <button onClick={()=> setEditing(true)}>+</button>}
        {editing &&       <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            placeholder="New item"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
      </form>}
        <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}<button title={item.title} onClick={deleteItem}>Delete</button>
</li>
        ))}
      </ul></div>
}

function Card() {
  return <div>Test</div>
}


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Column className="column" header="Pending Task" id="pending">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Column>
            <Column className="column" header="In Progress" id="progress">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Column>
      <Column className="column" header="Completed" id="completed">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Column>
      </div>
    </div>
  );
}
