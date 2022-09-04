import {useState, useEffect} from 'react';
import './GalleryItem.css';


function GalleryItem({photo, putGalleryList}){
    const [toggleDescription, setToggleDescription] = useState(false)

    const onSubmit = () => {
        putGalleryList(photo.id);
    };
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
        <div className='.picture'>
            <li onClick={seeDescription}>
                {seePhoto()}
            </li>
        </div>
    )

}
export default GalleryItem;