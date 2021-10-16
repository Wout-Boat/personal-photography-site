import React from 'react';
import {Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentPage from "./ContentPage";
import ProjectDetails from "./components/ProjectDetails";

const App: React.FC = () => {

    return (
        <div>
            <Navigation />
            <Route exact path={'/'} component={ContentPage} />
            <Route path={'/:page'} render={() => <ContentPage key={Math.random()}/>} />
            <Navigation />
            <ProjectDetails />
        </div>
    );
}

export default App;
