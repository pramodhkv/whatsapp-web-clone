import React from "react";

import "./styles/main.css";
import Sidebar from "./components/Sidebar";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
}

export default App;
