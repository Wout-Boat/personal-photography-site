import React from "react";
import {ContentPageType} from "./types/ContentPage.type";
import ApiDataService from "./services/api.service"
import {Gallery} from "./styles/Gallery.styles";
import GalleryImages from "./components/GalleryImages";

type Props = {
};

type state = {
    receivedData: ContentPageType | null,
    loading: boolean,
    imageArr: string[],
    imageLocation: string,
    notFound: boolean,
};

class ContentPage extends React.Component<Props, state> {

    constructor(props: Props) {
        super(props);
        this.retrievePage = this.retrievePage.bind(this);

        this.state = {
            receivedData: null,
            loading: true,
            imageArr: [],
            imageLocation: "",
            notFound: false,
        };
    }

    retrievePage() {
        let requestedPage;
        if (window.location.pathname.substring(1) === "") {
            requestedPage = "butterflypavilion"
        } else {
            requestedPage = window.location.pathname.substring(1)
        }
        ApiDataService.getPage(requestedPage)
            .then(response => {
                if (Object.keys(response.data).length === 0) {
                    this.setState({
                        notFound: true,
                    })
                } else {
                    this.setState({
                        imageArr: response.data.Item.images.SS,
                        imageLocation: response.data.Item.imageurl.S,
                        loading: false
                    });
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.retrievePage()
    }


    render() {
        const {imageArr, imageLocation, loading, notFound} = this.state;

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

        const NoContent = () => {
            return (
                <div>That page does not exist</div>
            )
        }

        return (
            <div>
                <Gallery>
                    {notFound ? <NoContent /> : null}
                    {!loading ? <LoadedContent/> : <LoadingScreen/>}
                </Gallery>
            </div>
        )
    }
}

export default ContentPage;
