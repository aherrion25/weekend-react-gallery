import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions'; 
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import './GalleryItem.css';



function GalleryItem({photo, putGalleryList, }){
    const [toggleDescription, setToggleDescription] = useState(false)

    return(
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Card className="card" sx={{borderRadius: '5%'}} elevation={5}>
                <div className="cardInfo" onClick={() => setToggleDescription(!toggleDescription)}>
                    {toggleDescription ?( <Typography className="cardDescription">{photo.description}</Typography>)
                    : (<CardMedia component="img" height= "300px" image={photo.path} />)}
                </div>
                <CardActions>
                    <Typography>Like count: {photo.likes}</Typography>
                    <Button onClick={() => putGalleryList(photo.id)}>Like It!</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default GalleryItem;