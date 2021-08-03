import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllBooksPage from '../components/pages/AllBooksPage';
import UserPage from '../components/pages/UserPage';
import Navbar from '../components/Navbar';

export default function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={AllBooksPage} />
                <Route path='/user' component={UserPage} />
            </Switch>
        </Router>
    )
}
