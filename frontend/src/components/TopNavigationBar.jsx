import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

// import TopicData from '../mocks/topics.json';

const TopNavigation = (props) => {

  const {favPhotoExist, TopicData} = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={TopicData}/>
      <FavBadge isFavPhotoExist={favPhotoExist}/>
    </div>
  )
}

export default TopNavigation;