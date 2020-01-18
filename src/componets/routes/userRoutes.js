import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserModuleList from '../modules/user/user-list';
import UserModuleCreate from '../modules/user/user-create/userCreate';
import UserModuleEdit from '../modules/user/user-edit/userEdit';

export const UserRoute = () => {
    return(
        <Router basename="/users">
            <Switch>
                <Route exact path = "/" component = {UserModuleList} />
                <Route exact path = "/create" component = {UserModuleCreate} />
                <Route path = "/users/edit/:id" component = {UserModuleEdit} />
            </Switch>
        </Router>
    );
}