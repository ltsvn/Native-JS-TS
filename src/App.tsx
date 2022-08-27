import React from 'react';
import './App.css';



function App() {

  const names = ['D', 'S', 'K', 'V']
  const users = [{id: 1, name: 'D'}, {id: 2, name: 'S'}, {id: 3, name: 'K'}, {id: 4, name: 'V'}]
  const liElements = names.map(n => <li>{n}</li>)
  const liElement = users.map((u) => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
<ul>
  {liElements}
</ul>
    </div>
  );
}
//const jsx = App()

export default App;
