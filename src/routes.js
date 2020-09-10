import React from 'react';
import { autenticado } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Insta from './Home/insta';
import Feed from './Feed/feed';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        autenticado() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
    } />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Insta} />
            <PrivateRoute path="/feed" component={Feed} />
        </Switch>
    </BrowserRouter>
);

export default Routes;