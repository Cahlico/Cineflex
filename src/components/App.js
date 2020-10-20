import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import Movies from '../pages/Movies';
import Timetable from '../pages/Timetable';
import Seats from '../pages/Seats;'

export default function App() {

    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route path="/Timetable" component={Timetable} />
                    <Route path="/Seats" component={Seats} />
                    <Route path="/" component={Movies} />
                </Switch>
            </Router>
        </>
    )
}