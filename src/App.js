import React from "react";

import "./styles/main.css";
import Sidebar from "./components/Sidebar";
import Chats from "./components/Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/" exact>
              <h1>Login page</h1>
            </Route>
            <Route path="/rooms" exact>
              <Sidebar />
            </Route>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chats />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
