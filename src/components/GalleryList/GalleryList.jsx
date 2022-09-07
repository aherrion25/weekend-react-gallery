import {useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import GalleryItem from "../GalleryItem/GalleryItem";
import { PhotoAlbumSharp } from "@mui/icons-material";

function GalleryList({galleryList, putGalleryList,}){


    // returns list from array
    return (
        <Grid container spacing={3}>
            {galleryList.map((photo) => {
                return <GalleryItem key={photo.id} photo={photo} putGalleryList = {putGalleryList} />
            })}
        </Grid>
    )
}
 export default GalleryList;
