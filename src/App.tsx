import React from 'react';
import {Route} from "react-router-dom";
import { Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentPage from "./ContentPage";
import ProjectDetails from "./components/ProjectDetails";
import {createBrowserHistory} from "history";

const App: React.FC = () => {

    const history = createBrowserHistory();

    return (
        <React.StrictMode>
        <Router history={history}>
            <Navigation />
            <Route exact path={'/'} component={ContentPage} />
            <Route path={'/:page'} render={() => <ContentPage key={Math.random()}/>} />
            <Navigation />
            <ProjectDetails />
        </Router>
        </React.StrictMode>
    );
}

export default App;
