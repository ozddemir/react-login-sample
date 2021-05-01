import React from 'react';
import LoginForm from "./components/LoginForm"
import PublicRoute from "./components/PublicRoute"
import PrivateRoute from "./components/PrivateRoute"
import Admin from "./components/Admin"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css'

/*
  Site girişinde iki farklı custom route tanımladık. PublicRoute herkes için ulaşılabilirken.
  PrivateRoute token olan kullanıcılar ulaşabilecek
*/
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
