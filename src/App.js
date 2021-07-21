import React, { useContext } from "react";

import "./styles/main.css";
import Sidebar from "./components/Sidebar";
import Chats from "./components/Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./shared/userContext";
import Login from "./components/Login";

function App() {
  const [user] = useContext(UserContext);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/" exact>
                <Sidebar />
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
      )}
    </div>
  );
}

export default App;
