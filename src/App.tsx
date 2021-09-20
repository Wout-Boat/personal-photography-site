import React from 'react';
import DjrJr from './pages/DjrJr'
import {Route, Router, Switch} from "react-router-dom";
import ClimateStrikeDenver from "./pages/ClimateStrikeDenver";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={DjrJr}/>
                <Route exact path={'/Climate-Strike-Denver'} component={ClimateStrikeDenver}/>
            </Switch>
            <Navigation />
        </div>
    );
}

export default App;
