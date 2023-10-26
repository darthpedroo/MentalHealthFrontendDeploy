import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../../context/AuthContext';


import ButtonLike from '../elements/LikeButton/LikeButton';

import ButtonComments from '../elements/CommentButton/CommentButton'
import UserDetails from '../../../../components/commonElements/userDetailsPost/userDetails';
import axios from 'axios';

import postStyle from './EveryPost.module.css'

function EveryPost({details , likes, className}) {
  const { user } = useContext(AuthContext);
  const [likesCount, setLikesCount] = useState([]);
  const [selfLikesCount, setSelfLikesCount] = useState([]);
  const [commentsCount, setCommentsCount] = useState([])
  const [mergedData, setMergedData] = useState([]);
  
  
  const getCommentsFromAllPosts = () =>{
    axios
    .get('https://darthpedro.pythonanywhere.com/commentsCounter/')
    .then((res => {
      setCommentsCount(res.data)
      
    }))
    .catch(err => {
      console.log("Error: ", err)
    })

  }

  const getLikesFromAllPosts = () => {
    axios
    .get('https://darthpedro.pythonanywhere.com/likes/counter/')
    .then((res => {
      setLikesCount(res.data)
    }))
    .catch(err => {
      console.log("Error: ", err)
    })
  }

  

  
  useEffect(() => {

    if (likesCount.length === 0) {
     getLikesFromAllPosts()
    }

    
    if (commentsCount.length === 0) {
       getCommentsFromAllPosts()
    }

    if (likesCount.length === 0 && user ) {

        axios
        .get(`https://darthpedro.pythonanywhere.com/likes/user/${user.user_id}`)
        .then((res => {
          setSelfLikesCount(res.data)
          if (likesCount.length === 0) {
            likesCount.length = 1
          }
        }))
        .catch(err => {
          console.log("Error: ", err)
        })
    
      
    }


    const mergedData = details.map((post) => {
      const likeCount = likesCount.find(like => like?.idPost === post.id);
      const commentCount = commentsCount.find(comment => comment?.postId === post.id);
      const selfLike = selfLikesCount.find((selfLike) => selfLike?.idPost === post.id);
      return {
        ...post,
        likesCount: likeCount ? likeCount.amountOfLikes : 0,
        commentsCount: commentCount ? commentCount.amountOfComments : 0,
        liked: selfLike ? !selfLike.isDeleted : false
      };
    });
    
    setMergedData(mergedData);
  
  }, [details, likesCount, selfLikesCount, commentsCount,  user]);

  return (
    <div className={className}>
      

      
      

      {mergedData.map((output, id) => (
      <div key={id} className={postStyle.post}>

        <Link className={`link ${postStyle.post_link}`} to={`http://localhost:3000/MentalHealthFrontendDeploy/blog/${output.id}`}>

          <UserDetails messageType={"ParameterIsntWorking"} author={output.author_username} date={output.publishedDate} pkUser={output.idUser}></UserDetails>
            <div className={postStyle.title_container}>

              <h1 className={postStyle.post_title}>{output.title}</h1>

            </div>

            <div className={postStyle.post_data}>
              {output.liked ? (
                <ButtonLike buttonState={"pressed"} likesQuantity={output.likesCount}></ButtonLike>
              ) : (
                <ButtonLike buttonState={""} likesQuantity={output.likesCount}></ButtonLike>
              )}
          
              <ButtonComments commentsQuantity={output.commentsCount}></ButtonComments>
            </div>

        </Link>

      </div>
      ))}
    </div>
  );
}

export default EveryPost;
