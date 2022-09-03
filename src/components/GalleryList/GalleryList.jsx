import {useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, galleryItem}){


    // returns list from array
    return (
        <ul>
            <li>
                {GalleryList.map (photo => {
                    return <GalleryItem key = {photo.id}
                    photo = {photo} />
                
                })}
            </li>
        </ul>
    )
}
 export default GalleryList;
