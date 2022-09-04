import {useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, putGalleryList}){


    // returns list from array
    return (
        <ul>
            <li>
                {galleryList.map (photo => {
                    return <GalleryItem key = {photo.id}
                    photo = {photo} 
                    putGalleryList = {putGalleryList} />
                
                })}
            </li>
        </ul>
    )
}
 export default GalleryList;
