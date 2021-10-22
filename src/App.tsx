import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentPage from "./ContentPage";
import ProjectDetails from "./components/ProjectDetails";
import ApiDataService from "./services/api.service";

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

        const {loadingNav, pages, pageNames} = this.state;

        return (
                <BrowserRouter>
                    <switch>
                        {!loadingNav ? <Navigation pages={pages!} pageNames={pageNames!}/> : null}
                        <Route exact path={'/'} render={() => <ContentPage key={Math.random()}/>}/>
                        <Route path={'/:page'} render={() => <ContentPage key={Math.random()}/>}/>
                        {!loadingNav ? <Navigation pages={pages!} pageNames={pageNames!}/> : null}
                        <ProjectDetails/>
                    </switch>
                </BrowserRouter>
        );
    }
}

export default App;
