import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
//import '../../css/components/blogComponents/Form.css'
import CommentsFromPosT from '../comments/CommentsFromPosT';
import AuthContext from '../../../../context/AuthContext';



import style from './SinglePost.module.css'
import UserDetails from '../../../../components/commonElements/userDetailsPost/userDetails';
import ButtonLike from '../../../blog/components/elements/LikeButton/LikeButton';

import ProfilePicture from '../../../user/components/profilePic/ProfilePic';

const SinglePost = ({ details, comments, likesProps }) => {
 
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [props , setProps] = useState(null)
  const[allowPut , setAllow] = useState(false)
  const [post, setPost] = useState({
    text: '',
    authorId: user ? user['pk'] : null, // Si hay usuario es el pk y sino null
    postId: id,
  });
  const [likesFromPost, setLikesFromPost] = useState([]) //Le pongo un array de default pq se espera un array en el fetch
  const[likesCounter, setLikesCounter] = useState(0)
  const [triggerLike, setTriggerLike] = useState(0)
  const [userEverLiked, setEverLiked] = useState(null)
  let[totalOfLikes, setTotalOfLikes] = useState(null)

  //AGREGAR POST SI ES QE NO EXISTE EL LIKE TODAVIA 

  


    
    useEffect(() => {
   
      const getAmountOfLikes = () => {
        if(likesFromPost) {
          let count = 0
          for(let i = 0; i< likesFromPost.length; i++){
            if(likesFromPost[i].isDeleted === false) {
              count+=1
            }
          }
          setLikesCounter(count)
        } 
      }
    
      if (totalOfLikes === null) {
        axios
          .get('https://darthpedro.pythonanywhere.com/likes/')
          .then((response) => {
            setTotalOfLikes(response.data.length);
          })
          .catch((err) => {
            console.log("Error: ", err);
          });
      }
      
      if (likesFromPost) {
        getAmountOfLikes();
      }
      
      if (likesFromPost.length === 0 || triggerLike === true) {
        setTriggerLike(false);
        axios
          .get(`https://darthpedro.pythonanywhere.com/likes/post/${id}`)
          .then((response) => {
            setLikesFromPost(response.data);
          })
          .catch((err) => {
            console.log("Error en el get: ", err);
          });
      }
      
      if (props === null || props.length === 0) {
        setProps(likesProps);
      }
      
      if (userEverLiked === false) {
        setEverLiked(true);
        axios
          .post('https://darthpedro.pythonanywhere.com/add/like', props)
          .then((response) => {
            setTriggerLike(true);
          })
          .catch((err) => {
            console.log("Post error: ", err);
          });
      }
      
      if (allowPut === true) {
        setAllow(false);
        axios
          .put(`https://darthpedro.pythonanywhere.com/likes/delete/${props.id}`, props)
          .then((response) => {
            setTriggerLike(true);
          })
          .catch((err) => {
            // Handle the error if needed
          });
      }
      
    }, [totalOfLikes, likesFromPost, triggerLike, props, userEverLiked, allowPut, id, likesProps,user]);
    

  const handleInput = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
      author: user ? user['pk'] : null, // Si hay usuario es el pk y sino null
    });
  };

  function handleCommentSubmit(event) {
    event.preventDefault();
    axios
      .post('https://darthpedro.pythonanywhere.com/add/comment', post) // Send 'post' directly, not wrapped in an object ANTES NO ANDABA PORQUE ESTABA ENTRE {}
      .then((response) =>       
        window.location.reload()
      )
      .catch((err) => console.log(err));
      
  }

  const handleLike = () => {
    
    
    if(props === "E"){
      
      setEverLiked(false)
      setProps({
        id: totalOfLikes + 1,
        username: user.username,
        isDeleted: false,
        idPost: id,
        idUser: user.pk,
    })

    }else {
      setEverLiked(true)
      setAllow(true)
      setProps((prevProps) =>({
        ...prevProps,
        isDeleted : !prevProps.isDeleted
      }))
      
    }

    

  };

  return (
    <div className={style.singlepost}>
      {user ? (

        <div>
          <UserDetails messageType={""} author={details.author_username} date={details.publishedDate} pkUser={details.idUser ? details.idUser : ""}></UserDetails>
          
          <div className={style.post_section}>

        <h2 className={style.post_title}>{details.title}</h2>

        <h3 className={style.post_text}>{details.text}</h3>

        <div className={style.post_buttons}>
          
          {props === "E" || props?.isDeleted === true || user === null ? 
            
           
            (<div onClick={handleLike} ><ButtonLike  buttonState={""} likesQuantity={likesCounter}></ButtonLike></div>
            ) :

            (<div onClick={handleLike} ><ButtonLike  buttonState={"pressed animation"} likesQuantity={likesCounter}></ButtonLike></div>)
            
          }

       
        </div>

      </div>

      <hr className={style.line}></hr>


          <div className={style.comment_section}>

          
          
      <form onSubmit={handleCommentSubmit} className={style.comment_form}>

        <div className={style.input_container}>

          <div className={style.profile_container}>
            <ProfilePicture data={user ? user.user_id : ""}></ProfilePicture>
          </div>

          <textarea
            type="text"
            name="text"
            onChange={handleInput}
            placeholder='Hace click para comentar...'
            className={style.form_input}
          ></textarea>
          
        </div>

        <button className={style.form_button} onClick={handleInput}>Publicar</button>

      </form>

    <CommentsFromPosT comments={comments}></CommentsFromPosT>

    </div>



        </div>

      ) : (

        <div>
          {/* Acá hacé que se desabiliten los botones de like y dislike */}
          <UserDetails messageType={""} author={details.author_username} date={details.publishedDate} pkUser={details.idUser}></UserDetails>
          
          <div className={style.post_section}>

        <h2 className={style.post_title}>{details.title}</h2>

        <h3 className={style.post_text}>{details.text}</h3>

        <div className={style.post_buttons}>
            <div ><ButtonLike  buttonState={""} likesQuantity={likesCounter}></ButtonLike></div>
        </div>
      </div>

      <hr className={style.line}></hr>

          <div className={style.comment_section}>

          
              
    <form onSubmit={handleCommentSubmit} className={style.comment_form}>

        <div className={`${style.input_container} ${style.input_logout_message}`}>

          <textarea disabled
            type="text"
            name="text"
            placeholder='Logeate para comentar'
            className={`${style.form_input} ${style.form_logout_message}`}
          ></textarea>

          
        </div>

    </form>

    <CommentsFromPosT comments={comments}></CommentsFromPosT>


    </div>
            </div>   
          )}

        </div>

      )
    }

export default SinglePost



            
