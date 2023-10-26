import React, { useEffect, useState,useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

import UploadImage from '../components/uploadImage/UploadImage'
import Banner from '../components/banner/Banner'
import ProfilePic from '../components/profilePic/ProfilePic'

import axios from 'axios';

import userStyle from './UserPage.module.css'

import EveryPost from '../../blog/components/everyPost/EveryPost';

const UserPage = () => {
    const {user} = useContext(AuthContext);
    const [firstBio, setFirstBio] = useState('');
    const [userBio, setBio] = useState('');
    const [userData, setData] = useState([]);
    const [userPosts,setPosts] = useState([]);
    const [postsCounter, setPostsCounter] = useState(null);
    const [likesCounter, setLikesCounter] = useState(null);
    const [commentsCounter, setCommentsCounter] = useState(null)
    const { id } = useParams();

    const [imageParameter, setParameter] = useState("")

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        }, []);

        useEffect(() => {
          ManageTextarea(500)
        }, [userBio])
        
    useEffect(() => {

      

      if(userData.length === 0) {
        getUserData(
          id,
          function(userData) {
            getUserPosts(userData.id)
          }
        )
      }

      if (userBio === '' && userData.id !== undefined) {
        getUserBio(userData.id)
      }
      
      if (postsCounter === null && userData.id !== undefined){
        getAmountOfPosts(userData.id)
      }

      if (likesCounter === null && userData.id !== undefined) {
        getUserLikes(userData.id)
      }

      if(commentsCounter === null && userData.id !== undefined) 
      {
        getUserCommentsAmount(userData.id)
      }
      
    },[userData, user]);

    const getUserBio =(pk) => {
      axios.get(`https://darthpedro.pythonanywhere.com/bio/${pk}`)
      .then( res => {
        setBio(res.data.bio)
        setFirstBio(res.data.bio)
      })
      .catch(err => {
        console.log("Error on bio get: ", err)
      })
    }

    const createUserBio = (pk) => {
      axios.post('https://darthpedro.pythonanywhere.com/addbio/', {
        bio: userBio,
        idUser: userData.id
      })
      .then( (response) => {
        console.log("Created user bio succesfully: ", response)
      }
      
      ).catch((err) => {
        console.log("Black error: ", err)
      })
    }

    const updateUserBio = (pk) => {
      axios.put(`https://darthpedro.pythonanywhere.com/modifybio/${pk}`, {
        bio: userBio,
        idUser: userData.id
      })
      .then( (response ) =>{
  
      })
      .catch((err) =>{
        console.log("Error  in the put: ", err)
      })

    }

    const getUserCommentsAmount =(pk) => {
      axios
      .get(`https://darthpedro.pythonanywhere.com/comments/${pk}/counter`)
      .then(res => {
        setCommentsCounter(res.data)
      })
      .catch(err => {
        console.log("err: ", err)
      })

    }

    const getUserLikes = (pk) => {
      axios
      .get(`https://darthpedro.pythonanywhere.com/likes/user/${pk}/counter`)
      .then(res => {
        setLikesCounter(res.data)
      })
      .catch(err => {
        console.log("Error: ", err)
      })
    }

    const getUserPosts = (pk) => {
      return axios.get(`https://darthpedro.pythonanywhere.com/users/${pk}/posts`)
    .then (res => {
      setPosts(res.data)
    })
      .catch(err => {
        console.error('Error:', err);
        throw err
      })
    }

    const getAmountOfPosts = (pk) => {
      return axios.get(`https://darthpedro.pythonanywhere.com/users/${pk}/postsCounter`)
      .then(res => {
        setPostsCounter(res.data)
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    }

    const getUserData = (username, fnCallback) => {
      return axios.get(`https://darthpedro.pythonanywhere.com/user/${username}`)
      .then(res => {
    
        setData(res.data);
        fnCallback(res.data);
      })
      .catch(err => {
        console.error('Error:', err);
        throw err;
      });
    }

    const EditInput = () => {
      const edit_section = document.getElementsByClassName(userStyle.edit_section)
      edit_section.classList.replace(userStyle.on_edit, userStyle.on_accept)

      const text_input = document.getElementsByClassName(userStyle.text_input)
      text_input.readOnly = false

      const letters_container = document.getElementsByClassName(userStyle.letters_container)
      letters_container.classList.toggle(userStyle.on_focus)

      const letters_quantity = document.getElementsByClassName(userStyle.number)
      letters_quantity.value = text_input.value.length + "/500"
    }

    const AcceptInput = () => {



      if (firstBio === '') {
        createUserBio(userData.id)
      }else {
        updateUserBio(userData.id)
      }

      
      const edit_section = document.querySelector("." + userStyle.edit_section)
      edit_section.classList.replace(userStyle.on_accept, userStyle.on_edit)

      const text_input = document.querySelector("." + userStyle.text_input)
      text_input.readOnly = true

      const letters_container = document.querySelector('.' + userStyle.letters_container)
      letters_container.classList.toggle(userStyle.on_focus)
    }

    const ManageTextarea = (maxValue) => {
      const letter_quantity = document.getElementsByClassName(userStyle.number)[0]; // Get the first element with the class name
      const text_input = document.getElementsByClassName(userStyle.text_input)[0]; // Get the first element with the class name
    
      // MAX LETTERS AVAILABLE VALIDATOR
      let cant_letters = text_input.value.length;
    
      if (cant_letters >= maxValue) {
        letter_quantity.style.color = "var(--user-input-error)";
        text_input.value = text_input.value.slice(0, maxValue); // Slice(0, -1) --> Only keeps values between Array[0:maxValue]
        cant_letters = text_input.value.length;
      } else {
        letter_quantity.style.color = "var(--user-font)";
      }
      // MAX LETTERS AVAILABLE VALIDATOR
    
      const line_height = parseInt(getComputedStyle(text_input).getPropertyValue("line-height"));
      text_input.style.height = "auto";
      let lines_quantity = text_input.scrollHeight / line_height;
    
      // MAX LINES AVAILABLE VALIDATOR
      if (lines_quantity > 10) {
        let available_text = text_input.value.split("\n").slice(0, 10);
    
        text_input.value = "";
        available_text.forEach((stringElement) => {
          text_input.value += stringElement + "\n";
        });
        text_input.value = text_input.value.slice(0, -1);
      }
   
      //  MAX LINES AVALIBLE VALIDATOR



      // TEXTAREA AUTO RESIZE
      text_input.style.height = "auto"
      lines_quantity = text_input.scrollHeight / line_height
      text_input.style.height = lines_quantity * line_height + "px"
      // TEXTAREA AUTO RESIZE

      setBio(text_input.value)

      letter_quantity.innerHTML = `${cant_letters}/${maxValue}`
    }

    const overflowEnabled = () => {
      document.querySelector("body").classList.toggle("overflow-disabled");
    }



    

    const {logoutUser} = useContext(AuthContext);

return (
  
  <div className={userStyle.page}>

  <div className={userStyle.sidebar}>

    <div className={userStyle.sidebar_fixed}>

      <div className={userStyle.menu}>
        <ul className={userStyle.menu_buttons}>

          <li className={userStyle.button}>
            <Link to="/main" className={userStyle.button_link}>
              <div className={userStyle.icon_name_container}>
                <svg className={userStyle.button_icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8.5 5.034v1.1l.953-.55l.5.867L9 7l.953.55l-.5.866l-.953-.55v1.1h-1v-1.1l-.953.55l-.5-.866L7 7l-.953-.55l.5-.866l.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/><path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/></g></svg>
                <h2 className={userStyle.button_name}>Hospital</h2>
              </div>
            </Link>
          </li>

          <li className={userStyle.button}>
            <Link to="/blog" className={userStyle.button_link}>
              <div className={userStyle.icon_name_container}>
                <svg className={userStyle.button_icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v14H5V5h14m2-2H3v18h18V3m-4 14H7v-1h10v1m0-2H7v-1h10v1m0-3H7V7h10v5Z"/></svg>
                <h2 className={userStyle.button_name}>Blog</h2>
              </div>
            </Link>
          </li>

          <li className={userStyle.button}>
            <Link to="/frases" className={userStyle.button_link}>
              <div className={userStyle.icon_name_container}>
                <svg className={userStyle.button_icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4"><rect width="36" height="36" x="6" y="6" rx="3"/><path strokeLinecap="round" strokeLinejoin="round" d="m14 16l4 16l6-13l6 13l4-16"/></g></svg>
                <h2 className={userStyle.button_name}>Frases</h2>
              </div>
            </Link>
          </li>

          <li className={userStyle.line_container}>
            <hr className={userStyle.line}/>
          </li>

          <li className={`${userStyle.button} ${userStyle.logout}`} onClick={logoutUser}>
            
            <Link to="/login" className={userStyle.button_link}>  {/*ACA HABÍA UN LINK PERO TE LOC AMBIE PORQUE DECIA BETTO*/}
              <div  className={userStyle.icon_name_container}>
                <img className={userStyle.button_img} src={require("../../../assets/images/profile/logout_icon.png")} alt="Logout Icon" />
                <h2  className={userStyle.button_name}>Cerrar Sesion</h2>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <hr className={userStyle.line_separator}/>
      
    </div>

  </div>

  <div className={userStyle.profile_section}>

    <div className={userStyle.profile_content}>

      <div className={userStyle.profile_info}>

        {user?.pk === userData?.id ? (
                  <div className={userStyle.profile}>

                  <div onClick={() => {setParameter("banner")}} className={`${userStyle.banner_container} ${userStyle.images_container}`}>
                    <Banner data={userData.id} className={userStyle.banner}> </Banner>
                  </div>
        
                  <div className={userStyle.profile_username}>
                    <div className={userStyle.container}>
        
                      <div onClick={() => {setParameter("picture")}} className={`${userStyle.picture_container} ${userStyle.images_container}`}>
                        <ProfilePic data={userData.id} ></ProfilePic>
                      </div>
                      <h1 className={userStyle.username}>{userData.username}</h1>
        
                    </div>
                  </div>
        
                </div>
        ) : (
          <div className={userStyle.profile}>

          <div className={`${userStyle.banner_container}`}>
            <Banner data={userData.id} className={userStyle.banner}> </Banner>
          </div>

          <div className={userStyle.profile_username}>
            <div className={userStyle.container}>

              <div className={`${userStyle.picture_container}`}>
                <ProfilePic data={userData.id} ></ProfilePic>
              </div>
              <h1 className={userStyle.username}>{userData.username}</h1>

            </div>
          </div>

        </div>
        )}

      

        <div className={userStyle.black_container}></div>

        <div className={userStyle.profile_infos}>

          <div className={userStyle.about_me}>

            <div className={userStyle.top_container}>
              <h2 className={userStyle.title}>About Me</h2>

              
              {user?.pk === userData?.id ? (

                  <div className={`${userStyle.edit_section} ${userStyle.on_edit}`}>

                  <button onClick={() => {EditInput()}} className={`${userStyle.edit_container} ${userStyle.button_container}`}>
                    <img className={userStyle.edit_icon} src={require("../../../assets/images/profile/edit_icon.png")} alt="Edit Icon"/>
                  </button>

                  <button onClick={() => {AcceptInput()}} className={`${userStyle.accept_container} ${userStyle.button_container}`}>
                    <img src={require("../../../assets/images/profile/check_icon.png")} alt="Check Icon" className={userStyle.accept_icon} />
                    <h3 className={userStyle.accept_text}>Aceptar Cambios</h3>
                  </button>

                  </div>

              ) : null }

              
            </div>

            <div className={userStyle.input_container}>
              <textarea 
              name="biografia" 
              defaultValue={userBio}
              className={userStyle.text_input} 
              readOnly
              placeholder='No bio yet'
              onChange={() => {ManageTextarea(500)}}
              rows="1">
                
              </textarea>
          
              <div className={userStyle.letters_container}>
                <h4 className={userStyle.number}>0/500</h4>
              </div>
            </div>

          </div>

          <div className={userStyle.statistics}>
            <ul className={userStyle.info_list}>

              <li className={userStyle.dato}>
                  <div className={userStyle.icon_container}>
                    <img src={require("../../../assets/images/profile/post_icon.png")} alt="Post Icon" className={userStyle.icon} />
                  </div>

                  <h3 className={`${userStyle.mobile_title} ${userStyle.title}`}>Posteos</h3>

                  <div className={userStyle.text_container}>
                    <h3 className={userStyle.title}>Posteos</h3>
                    <h2 className={userStyle.quantity}>{postsCounter}</h2>
                  </div>
              </li>

              <li className={userStyle.dato}>
                <div className={userStyle.icon_container}>
                  <img src={require("../../../assets/images/profile/like_icon.png")} alt="Like Icon" className={userStyle.icon} />
                </div>

                <h3 className={`${userStyle.mobile_title} ${userStyle.title}`}>Me Gustas</h3>

                <div className={userStyle.text_container}>
                  <h3 className={userStyle.title}>Me Gustas</h3>
                  <h2 className={userStyle.quantity}>{likesCounter}</h2>
                </div>
              </li>

              <li className={userStyle.dato}>
                <div className={userStyle.icon_container}>
                  <img src={require("../../../assets/images/profile/comment_icon.png")} alt="Comment Icon" className={userStyle.icon} />
                </div>

                <h3 className={`${userStyle.mobile_title} ${userStyle.title}`}>Comentarios</h3>

                <div className={userStyle.text_container}>
                  <h3 className={userStyle.title}>Comentarios</h3>
                  <h2 className={userStyle.quantity}>{commentsCounter}</h2>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>



      <div className={userStyle.profile_posts}>

        <div className={userStyle.post_background}>
        
          <EveryPost details={userPosts} likes ={1} className={userStyle.post_container}> </EveryPost>

        </div>

      </div>


    </div>
  </div>

  <div className={userStyle.mobile_menu}>
    <ul className={userStyle.mobile_list}>

      <li className={userStyle.mobile_button}>
        <Link to="/frases" className={userStyle.mobile_link}>
          <div className={userStyle.mobile_icon_container}>
          <svg className={userStyle.mobile_icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4"><rect width="36" height="36" x="6" y="6" rx="3"/><path strokeLinecap="round" strokeLinejoin="round" d="m14 16l4 16l6-13l6 13l4-16"/></g></svg>
          </div>
        </Link>
      </li>

      <li className={userStyle.mobile_button}>
        <Link to="/blog" className={userStyle.mobile_link}>
          <div className={userStyle.mobile_icon_container}>
          <svg className={userStyle.mobile_icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v14H5V5h14m2-2H3v18h18V3m-4 14H7v-1h10v1m0-2H7v-1h10v1m0-3H7V7h10v5Z"/></svg>
          </div>
        </Link>
      </li>

      <li className={userStyle.mobile_button}>
        <Link to="/main" className={userStyle.mobile_link}>
          <div className={userStyle.mobile_icon_container}>
            <svg className={userStyle.mobile_icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8.5 5.034v1.1l.953-.55l.5.867L9 7l.953.55l-.5.866l-.953-.55v1.1h-1v-1.1l-.953.55l-.5-.866L7 7l-.953-.55l.5-.866l.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/><path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/></g></svg>
          </div>
        </Link>
      </li>

      <li className={userStyle.mobile_button} onClick={logoutUser}>
        <Link to="/login" className={userStyle.mobile_link}>
          <div className={userStyle.mobile_icon_container}>
          <img className={userStyle.mobile_icon} src={require("../../../assets/images/profile/logout_icon.png")} alt="Logout Icon" />
          </div>
        </Link>
      </li>

    </ul>
  </div>

    {imageParameter ? (
      <UploadImage 
      data={userData.id} 
      imageType={imageParameter}
      closeFunction={() => {
        setParameter("");
        overflowEnabled()
      }}
      ></UploadImage>
    ) : null}

  </div>

) 

    }

  


export default UserPage
