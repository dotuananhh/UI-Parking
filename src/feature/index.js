import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Dashboard from "./Dashboard";
import History from "./History";
import Map from "./Map";
export default function Feature(props) {
    const { url } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/history" component={History} />
                <Route path="/map" component={Map} />
            </Switch>
        </div>
    )
}