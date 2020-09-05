import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Signin from './Signin';
import Home from './Home';
import Menu from '../core/Menu';

const Routes = () => (
    <BrowserRouter>
    <Menu />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/signin' exact component={Signin} />
        </Switch>
    </BrowserRouter>
);

export default Routes;