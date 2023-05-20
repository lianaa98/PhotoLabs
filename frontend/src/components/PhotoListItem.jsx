import React from 'react';

import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, id, like, toggleModalState, clickImgSetURL, hideUserName } = props;
  
  const clickHandler = () => {
    toggleModalState();
    clickImgSetURL(imageSource);
  }

  return (
    <div className="photo-list-item">
      <PhotoFavButton like={like} photo_id={id} />
      <img className="photo-list--image" 
      src={imageSource} 
      onClick={clickHandler} />
      {!hideUserName && <p>Username: {username}</p>}
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;