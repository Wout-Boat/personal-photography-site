import React from "react";
import {contentPage} from "../types/ContentPage.type";
import ApiDataService from "../services/api.service";
import {Gallery} from "./Gallery.styles";
import GalleryImages from "../components/GalleryImages";

// TODO: This will be used to load all of the pages from the database. There will need to be some changes to check the
//  url it is being served on and to make that get different items from the database.
type Props = {};

type state = {
    receivedData: contentPage | null,
    loading: boolean,
    imageArr: string[],
    imageLocation: string,
};

class NotProudToBe extends React.Component<Props, state> {

    constructor(props: Props) {
        super(props);
        this.retrievePage = this.retrievePage.bind(this);

        this.state = {
            receivedData: null,
            loading: true,
            imageArr: [],
            imageLocation: "",
        };
    }

    retrievePage() {
        ApiDataService.getPage('notproudtobe')
            .then(response => {
                let result = []
                for (let i = 0; i < response.data.Item.images.L.length; i++) {
                    result.push(response.data.Item.images.L[i].S)
                }
                this.setState({
                    imageArr: result,
                    imageLocation: response.data.Item.imageurl.S,
                    loading: false
                });
            })
            .catch(e => {
                console.log(e);
            })
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        console.log(this.state.loading)
        this.retrievePage()
    }


    render() {
        const {imageArr, imageLocation, loading} = this.state;

        const LoadedContent = () => {
            return <GalleryImages imagesArr={imageArr} folderName={imageLocation}/>;
        }

        const LoadingScreen = () => {
            return (
                <div>
                    Loading Content...
                </div>
            )
        }

        return (
            <div>
                <Gallery>
                    {!loading ? <LoadedContent /> : <LoadingScreen /> }
                </Gallery>
            </div>
        )
    }
}

export default NotProudToBe;
