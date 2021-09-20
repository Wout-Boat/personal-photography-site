import GalleryImages from "../components/GalleryImages";
import {Gallery} from "./Gallery.styles";
import React from "react";

const folderUrl = '2019-09-20-climate-strike-denver';
const imageList = [
    'IMG_4719.jpg',
    'IMG_4771.jpg',
    'IMG_4780.jpg',
    'IMG_4797.jpg',
    'IMG_4873.jpg',
    'IMG_4901.jpg',
    'IMG_4929.jpg',
    'IMG_4937.jpg',
    'IMG_4938.jpg',
    'IMG_4977.jpg',
    'IMG_5013.jpg',
    'IMG_5047.jpg',
    'IMG_5060.jpg',
    'IMG_5076.jpg',
    'IMG_5184.jpg',
    'IMG_5203.jpg',
    'IMG_5315.jpg',
    'IMG_5387.jpg',
    'IMG_5390.jpg',
    'IMG_5541.jpg',
    'IMG_5580.jpg',
    'IMG_5620.jpg',
    'IMG_5631.jpg',
    'IMG_5632.jpg',
]

const ClimateStrikeDenver: React.FC = () => (
    <Gallery>
        <GalleryImages images={imageList} folderName={folderUrl}/>
    </Gallery>
);

export default ClimateStrikeDenver;
