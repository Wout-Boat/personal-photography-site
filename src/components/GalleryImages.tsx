import React from "react";
import DetailView from "./DetailView";

const url = 'https://d3vv8trcq40b0k.cloudfront.net/';

type Props = {
    imagesArr: string[];
    folderName: string;
}

type State = {
    detailIsOpen: boolean;
    selectedImage: string;
}

class GalleryImages extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.ImageClickHandler = this.ImageClickHandler.bind(this)

        this.state = {
            detailIsOpen: false,
            selectedImage: "",
        }
    }

    ImageClickHandler(event: React.MouseEvent<HTMLImageElement>) {
        const img: HTMLImageElement = event.currentTarget;
        this.setState({
            selectedImage: img.alt,
            detailIsOpen: true,
        })
    }

    ImageTagGenerator() {
        return this.props.imagesArr.map((image: string) => (
            <img src={url + this.props.folderName + '/thumbs/' + image} alt={image} key={image} onClick={this.ImageClickHandler} />
        ))
    }

    CloseDetailView = () => {
        this.setState({
            detailIsOpen: false,
        })
    }

    render() {
        const { detailIsOpen, selectedImage } = this.state;
        const detailUrl = url + this.props.folderName + "/" + selectedImage;

        return (
            <div>
                <div>{this.ImageTagGenerator()}</div>
                {detailIsOpen ? <DetailView imgUrl={detailUrl} closeFunction={this.CloseDetailView}/>: null}
            </div>
        );
    }
}

export default GalleryImages;
