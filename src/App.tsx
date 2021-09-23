import React from 'react';
import {Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentPage from "./ContentPage";

const App: React.FC = () => {

    return (
        <div>
            <Navigation />
            <Route exact path={'/'} component={ContentPage} />
            <Route path={'/:page'} render={() => <ContentPage key={Math.random()}/>} />
            <Navigation />
        </div>
    );
}

export default App;
