import { React, useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext'

import profileStyle from './ShowProfile.module.css'
import  ProfilePicture  from '../../../pages/user/components/profilePic/ProfilePic'

function ShowProfile()  {
  
  let {user} = useContext(AuthContext)



  const {logoutUser} = useContext(AuthContext);


  
  return (
    
    
    <div className={profileStyle.profile_count_container} >

        
        <div className={profileStyle.picture_section}>
            <ProfilePicture data={(user ? user.user_id : "")}></ProfilePicture>
        </div>

        <div className={profileStyle.username_section}>
          <h1 className={profileStyle.username}>
              {user ? user.username : "Logearse"}
          </h1>
        </div>

        <ul className={profileStyle.buttons_container}>

          <li className={profileStyle.button}>
            <Link to={user ? `/profile/${user.username}` : "/login"} className={profileStyle.icon_container}>
              <img src={require("../../../assets/images/profile/user_icon.png")} alt="User Icon" className={profileStyle.button_icon} />
            </Link>
          </li>

          <li className={profileStyle.button}>
            <Link to={"/blog"} className={profileStyle.icon_container}>
             <svg className={profileStyle.button_icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v14H5V5h14m2-2H3v18h18V3m-4 14H7v-1h10v1m0-2H7v-1h10v1m0-3H7V7h10v5Z"/></svg>
            </Link>
          </li>

          {user ?
          <li className={profileStyle.button} onClick={logoutUser} >
            <Link to="/login" className={profileStyle.icon_container}>
              <img src={require("../../../assets/images/profile/logout_icon.png")} alt="Logout Icon" className={`${profileStyle.button_icon} ${profileStyle.logout_icon}`} />
            </Link>
          </li>
           : ""}
        </ul>


    </div>
    

  )
}


export default ShowProfile