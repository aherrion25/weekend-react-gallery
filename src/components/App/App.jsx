import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import Container from '@mui/material/Container';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(()=> {
    getGalleryList();
  }, [])

  // grabs data from the array and displays it on DOM
  const getGalleryList = () => {
    axios({
      method:'GET',
      url:'/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data)
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong!')
    })
  }

  const putGalleryList = (photoId) => {
    axios ({
      method: 'PUT',
      url: `/gallery/like/${photoId}`
    }).then((response) => {
      console.log(response);
      getGalleryList();
    }).catch((error) => {
      console.log('ERROR in PUT', error);
      alert('Something went wrong!')
    })
  }

    return (
      <Container className="App">
        <Header />
        <GalleryList galleryList = {galleryList} putGalleryList={putGalleryList} />
      </Container>
    );
}

export default App;
