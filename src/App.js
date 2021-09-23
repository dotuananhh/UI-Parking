import './App.css';
import React, { Suspense } from 'react';
import Header from './Components/Header';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import History from './feature/History';
import Map from './feature/Map';
import Dashboard from './feature/Dashboard';
import CardInfo from './feature/CardInfo';
function App() {
    const Feature = React.lazy(() => import('./feature/index'));
    return (
        <div className="html">
            <div className="container" >
                <Suspense fallback={<div> Loading...</div>}>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Redirect exact from="/" to="/dashboard" />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/history" component={History} />
                            <Route path="/map" component={Map} />
                            <Route path="/cardInfo" component={CardInfo} />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </div>
        </div>
    );
}
export default App