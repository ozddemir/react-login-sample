import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { islogin } from './helper/loginmanager';

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            islogin() ?
                <Redirect to="/admin" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;