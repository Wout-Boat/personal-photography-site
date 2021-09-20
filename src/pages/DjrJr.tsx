import React from "react";
// Styles
import {Gallery} from "./Gallery.styles";
// js

const folder = '2019-10-22-Donald-Trump-Jr';

const DjtJr: React.FC = () =>
    (
        <Gallery>
            <img className={'img'}
                 src='https://d3vv8trcq40b0k.cloudfront.net/2019-10-22-Donald-Trump-Jr/thumbs/IMG_7181.jpg'/>
            <img className={'img'}
                 src='https://d3vv8trcq40b0k.cloudfront.net/2019-10-22-Donald-Trump-Jr/thumbs/IMG_7197.jpg'/>
            <img className={'img'}
                 src='https://d3vv8trcq40b0k.cloudfront.net/2019-10-22-Donald-Trump-Jr/thumbs/IMG_7202.jpg'/>
            <img className={'img'}
                 src='https://d3vv8trcq40b0k.cloudfront.net/2019-10-22-Donald-Trump-Jr/thumbs/IMG_7417.jpg'/>
            <img className={'img'}
                 src='https://d3vv8trcq40b0k.cloudfront.net/2019-10-22-Donald-Trump-Jr/thumbs/IMG_7437.jpg'/>
        </Gallery>
    );

export default DjtJr;
