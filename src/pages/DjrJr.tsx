import React from "react";
// Styles
import {Gallery} from "./Gallery.styles";
import GalleryImages from "../components/GalleryImages";
// js

const folderurl = '2019-10-22-Donald-Trump-Jr';
const imageList = [
    'IMG_7181.jpg',
    'IMG_7197.jpg',
    'IMG_7202.jpg',
    'IMG_7417.jpg',
    'IMG_7437.jpg',
]

const DjtJr: React.FC = () =>
    (
        <Gallery>
            <GalleryImages
                folderName={folderurl}
                images={imageList}
            />
        </Gallery>
    );

export default DjtJr;
