import {useState, useEffect} from 'react';
import './GalleryItem.css';


function GalleryItem({photo, putGalleryList}){
    const [toggleDescription, setToggleDescription] = useState(true)

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
                Like:{photo.likes}
                <button onClick = {onSubmit}>Like It!</button>
            </li>
        </div>
    )

}
export default GalleryItem;