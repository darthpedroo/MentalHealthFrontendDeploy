import axios from 'axios';
import React, { useState, useEffect } from 'react';
import profilePicStyle from './ProfilePic.module.css';

const ProfilePic = ({ data }) => {
  const [currentImage, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      axios
        .get(`https://darthpedro.pythonanywhere.com/images/${data}/`)
        .then((res) => {
          if (res.data.picture !== null) {
            setImage(`https://darthpedro.pythonanywhere.com/media/profilepics/${res.data.picture.replace(/^\/media\/profilepics\//, '')}`);
            setLoading(false)
          }
        })
        .catch((error) => {
          setImage(`https://darthpedro.pythonanywhere.com/media/profilepics/loading.png`);
          setLoading(true)
        });
    }
    
  }, [data]);

  return (
    <div className={profilePicStyle.picture_container}>
      {currentImage !== null && loading === false ? (
        <img className={profilePicStyle.picture} src={currentImage} alt=""></img>
      ) : (
        <img className={`${profilePicStyle.picture} ${profilePicStyle.skeleton}`} src={require('./loading.png')} alt=""></img>
      )}
    </div>
  );
};

export default ProfilePic;
