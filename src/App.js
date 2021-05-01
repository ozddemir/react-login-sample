import React from 'react';
import LoginForm from "./Components/LoginForm"
import PublicRoute from "./Components/PublicRoute"
import PrivateRoute from "./Components/PrivateRoute"
import Admin from "./Components/Admin"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute component={LoginForm} path="/" exact />
          <PrivateRoute component={Admin} path="/admin" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
