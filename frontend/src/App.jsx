import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import PhotoData from './mocks/photos.json';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    favPhotoExist,
    like,
    toggleModalState,
    modalState,
    closeModal,
    clickImgSetID,
    clickedImgID
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      favPhotoExist={favPhotoExist}
      like={like}
      toggleModalState={toggleModalState} 
      PhotoData={PhotoData} 
      clickImgSetID={clickImgSetID} />
      {modalState && <PhotoDetailsModal closeModal={closeModal} 
      PhotoData={PhotoData}
      like={like}
      toggleModalState={toggleModalState}
      clickedImgID={clickedImgID}
      clickImgSetID />}
    </div>
  );
};

export default App;