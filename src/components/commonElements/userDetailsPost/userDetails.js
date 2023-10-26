import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import formatDate from '../../../functions/dataFormatter'

import style from './userDetails.module.css'
import ProfilePicture  from '../../../pages/user/components/profilePic/ProfilePic';
import axios from 'axios';

/* messageType --> si es un comentario o post */
function UserDetails({ messageType, author, date, pkUser }) {


 

  return (

  <div className={style.author_date_container}>
    
    <div className={style.profile_pic_container}>
      <ProfilePicture data={pkUser}></ProfilePicture>
    </div>
    <Link className={style.post_author} to={`http://localhost:3000/MentalHealthFrontendDeploy/profile/${author}`}> <h1>{author}</h1> </Link>
    <div className={style.separation_dot}></div>
    <h3 className={style.post_date}>{formatDate(date, new Date().getTime())}</h3>

  </div>

  );
}

export default UserDetails;
