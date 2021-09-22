import React from "react";
// Styles
import {Gallery} from "./Gallery.styles";
import GalleryImages from "../components/GalleryImages";
// js

const folderUrl = '2019-10-22-Donald-Trump-Jr';
const imageList = [
    'IMG_7181.jpg',
    'IMG_7197.jpg',
    'IMG_7202.jpg',
    'IMG_7417.jpg',
    'IMG_7437.jpg',
    'IMG_7458.jpg',
    'IMG_7695.jpg',
    'IMG_7733.jpg',
    'IMG_7939.jpg',
    'IMG_8002.jpg',
    'IMG_8018.jpg',
    'IMG_8048.jpg',
    'IMG_8064.jpg',
    'IMG_8068.jpg',
    'IMG_8147.jpg',
    'IMG_8200.jpg',
    'IMG_8210.jpg',
]

const DjtJr: React.FC = () =>
    (
        <Gallery>
            <GalleryImages
                folderName={folderUrl}
                imagesArr={imageList}
            />
        </Gallery>
    );

export default DjtJr;
