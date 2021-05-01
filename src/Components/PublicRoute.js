import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { islogin } from '../helper/loginmanager';

// PublicRoute gelen kullanıcı islogin metodu ile tokena sahip olup olmadığı kontrol edliyor. Duruma göre admin sayfasına yönlendiriliyor
// token yoksa login sayfası tekrardan çağrılıyor
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