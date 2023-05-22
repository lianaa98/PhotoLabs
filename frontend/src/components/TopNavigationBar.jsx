import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

// import TopicData from '../mocks/topics.json';

const TopNavigation = (props) => {

  const {favPhotoExist, TopicData, selectTopic} = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={() => selectTopic(null)}>PhotoLabs</span>
      <TopicList topics={TopicData} selectTopic={selectTopic}/>
      <FavBadge isFavPhotoExist={favPhotoExist}/>
    </div>
  )
}

export default TopNavigation;