import React from 'react';
import Admin from "./Admin"
import { Redirect, Switch, Route } from "react-router-dom";
import { islogin } from "../helper/loginmanager";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Bu custom route sadece login olan kullanıcılar için. 
    return (
            <Route {...rest} render={props => {
                    if (islogin()) {
                        return (
                            <Switch>
                                {/* buradan diğer route larınızı yazabilirsiniz
                                <Route exact path="/admin/customers"><Customer /></Route> 
                                bunun gibi ihtiyaç duyduğunuz route buraya yazabilirsiniz
                                */}
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