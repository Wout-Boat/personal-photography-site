import React from "react";

const url = 'https://d3vv8trcq40b0k.cloudfront.net/';

type props = {
    imagesArr: string[];
    folderName: string;
}

const GalleryImages: React.FC<props> = ({imagesArr, folderName}) => {
    const imgArr = imagesArr.map((image: string) => (
        <img src={url + folderName + '/thumbs/' + image} alt='' key={image}/>
    ))

    //const detailView = (e: React.MouseEvent<HTMLButtonElement>) => {
    //    const imageSelection = e.currentTarget.value;
    //}

    return (
        <div>{imgArr}</div>
    );
}

export default GalleryImages;
