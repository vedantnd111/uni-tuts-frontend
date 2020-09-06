import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Signin from './Signin';
import Home from './Home';
import Menu from '../core/Menu';
import AdminRoutes from '../auth/AdminRoutes';
import PrivateRoutes from '../auth/PrivateRoutes';
import { signout } from '../auth';

const Routes = () => (
    <BrowserRouter>
    <Menu />
        <Switch>
            <Route path='/' exact component={Home} />
            <AdminRoutes path='/signup' exact component={Signup} />
            <Route path='/signin' exact component={Signin} />
            <PrivateRoutes path='/signout' exact component={signout} />
        </Switch>
    </BrowserRouter>
);

export default Routes;