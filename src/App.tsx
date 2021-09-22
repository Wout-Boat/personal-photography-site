import React from 'react';
import DjrJr from './pages/DjrJr'
import {Route, Switch} from "react-router-dom";
import ClimateStrikeDenver from "./pages/ClimateStrikeDenver";
import Navigation from "./components/Navigation";
import NotProudToBe from "./pages/NotProudToBe";

const App: React.FC = () => {

    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={DjrJr}/>
                <Route exact path={'/Climate-Strike-Denver'} component={ClimateStrikeDenver} />
                <Route exact path={'/Not-Proud-To-Be'} component={NotProudToBe} />
            </Switch>
            <Navigation />
        </div>
    );
}

export default App;
