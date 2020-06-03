import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          ToDoApp
      </header>
      <ToDoList/>
    </div>
  );
}

export default App;
