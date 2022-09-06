import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import './GalleryItem.css';



function GalleryItem({photo, putGalleryList, }){
    const [toggleDescription, setToggleDescription] = useState(false)

    // const onSubmit = () => {
    //     putGalleryList(photo.id);
    // };
    const seeDescription = () => {
        setToggleDescription(!toggleDescription)
    };
    const seePhoto = () =>{
        if (toggleDescription){
            return <img src={photo.path}></img>
        }
        else{
            return <p>{photo.description}</p>
        }
    }

    return(
        <div>
            <li onClick={seeDescription}>
                {seePhoto()}
  
            </li>
            Like:{photo.likes}
                <Button  onClick={() => putGalleryList(photo.id)}>Like It!</Button>
        </div>
    )

}
export default GalleryItem;