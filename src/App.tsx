import React from 'react';
import {Route} from "react-router-dom";
import { Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentPage from "./ContentPage";
import ProjectDetails from "./components/ProjectDetails";
import {createBrowserHistory} from "history";
import ApiDataService from "./services/api.service";
import {Simulate} from "react-dom/test-utils";

type Props = {};

type State = {
    loadingNav: boolean,
    pages: string[] | null,
    pageNames: string[] | null,
};

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            loadingNav: true,
            pages: null,
            pageNames: null,
        }
    }

    getNavBar() {
        ApiDataService.getNavigation()
            .then(response => {
                this.setState({
                    loadingNav: false,
                    pages: response.data.Item.pages.SS,
                    pageNames: response.data.Item.pageNames.SS,
                })
            })
    }

    componentDidMount() {
        this.setState({
            loadingNav: true
        })

        this.getNavBar();
    }

    render() {

        const { loadingNav, pages, pageNames } = this.state;

        const history = createBrowserHistory();

        return (
            <React.StrictMode>
                <Router history={history}>
                    {!loadingNav ? <Navigation pages={pages!} pageNames={pageNames!}/> : null}
                    <Route exact path={'/'} render={() => <ContentPage key={Math.random()}/>} />
                    <Route path={'/:page'} render={() => <ContentPage key={Math.random()}/>} />
                    {!loadingNav ? <Navigation pages={pages!} pageNames={pageNames!}/> : null}
                    <ProjectDetails />
                </Router>
            </React.StrictMode>
        );
    }
}

export default App;
