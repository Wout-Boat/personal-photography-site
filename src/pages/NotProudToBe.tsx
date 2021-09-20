import React from "react";
// Styles
import {Gallery} from "./Gallery.styles";
import GalleryImages from "../components/GalleryImages";
// js

const folderUrl = '2019-09-19-Not-Proud-To-Be';
const imageList = [
    'IMG_4361.jpg',
    'IMG_4302.jpg',
    'IMG_4522.jpg',
    'IMG_4378.jpg',
    'IMG_4414.jpg',
    'IMG_4204.jpg',
    'IMG_4344.jpg',
    'IMG_3805.jpg',
    'IMG_3970.jpg',
    'IMG_3618.jpg',
    'IMG_4335.jpg',
    'IMG_3832.jpg',
    'IMG_3766.jpg',
    'IMG_4286.jpg',
    'IMG_3720.jpg',
    'IMG_4305.jpg',
]

const NotProudToBe: React.FC = () =>
    (
        <Gallery>
            <GalleryImages
                folderName={folderUrl}
                images={imageList}
            />
        </Gallery>
    );

export default NotProudToBe;
