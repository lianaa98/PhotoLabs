import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import PhotoData from './mocks/photos.json';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [favPhotoExist, setFavPhotoExist] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [clickedImgURL, setClickedImgURL] = useState("");

  const like = (id) => {
    let newArr;
    if (likedPhotos.includes(id)) {
      newArr = likedPhotos.filter(p => p !== id);
    } else {
      newArr = [...likedPhotos, id];
    }
    setLikedPhotos(newArr);
    setFavPhotoExist(newArr.length > 0 ? true : false);
  };

  const toggleModalState = () => {
    setModalState(true);
  }

  const closeModal = () => {
    setModalState(false);
  }

  const clickImgSetURL = (url) => {
    setClickedImgURL(url);
  }

  return (
    <div className="App">
      <HomeRoute 
      favPhotoExist={favPhotoExist}
      like={like}
      toggleModalState={toggleModalState} 
      PhotoData={PhotoData} 
      clickImgSetURL={clickImgSetURL} />
      {modalState && <PhotoDetailsModal closeModal={closeModal} 
      PhotoData={PhotoData}
      clickedImgURL={clickedImgURL} />}
    </div>
  );
};

export default App;