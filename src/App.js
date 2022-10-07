import React from "react";
import { useState } from "react";

import Background from "./components/background/background.component";
import Header from "./components/header/header.components";
import SearchBox from "./components/search-box/search-box.component";
import TaskBox from "./components/task-box/task-box.component";

import "./App.scss";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  return (
    <div className="App">
      <Background />
      <div className="main">
        <Header />
        <SearchBox input={input} setInput={setInput} />
        <TaskBox input={input} />
        <footer className="footer">Drag and drop to reorder list</footer>
      </div>
    </div>
  );
}

export default App;
