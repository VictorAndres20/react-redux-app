import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginModule from '../modules/login';
import UserModule from '../modules/user';

import TestModule from '../modules/test'; 
import NotFoundModule from '../modules/not-found';

import HistoryHelper from '../../_helpers/HistoryHelper';

export const AppRoute = () => {
    return(
        <Router history={HistoryHelper}>
            <Switch>
                <Route exact path = "/" component = {LoginModule} />
                <Route exact path = "/test" component = {TestModule} />
                <Route path = "/users" component = {UserModule} />

                <Route component = {NotFoundModule} />
            </Switch>
        </Router>
    );
}