import React from 'react';
import Admin from "./Admin"
import { Redirect, Switch, Route } from "react-router-dom";
import { islogin } from "./helper/loginmanager";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
            <Route {...rest} render={props => {
                    if (islogin()) {
                        return (
                            <Switch>
                            <Route exact path="/admin"><Admin /></Route>
                            </Switch>
                        )
                    }
                    else {
                        return (
                            <Redirect to={
                                {
                                    pathname: "/",

                                }}
                            />
                        )
                    }

                }}
            />
    );
}
export default PrivateRoute