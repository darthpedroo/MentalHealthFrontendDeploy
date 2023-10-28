import React from 'react'
import style from './Comments.module.css'
import { Link } from 'react-router-dom';
import UserDetails from '../../../../components/commonElements/userDetailsPost/userDetails';

const CommentsFromPosT = ({comments}) => {
    

  
    const filteredData = comments.map(comment => ({
        author_username: comment.author_username,
        text: comment.text,
        publishedDate : comment.publishedDate,
        idUser : comment.authorId
      }));


  return (
    
    <div className={filteredData.length !== 0 ? (style.all_coments_container) : (style.container_empty)}>
            {filteredData.map((comment, index) => (
                <div key={index} className={style.comment_container}>

                  <div className={style.comment_details}>

                    <UserDetails author={comment.author_username} date={comment.publishedDate} pkUser={comment.idUser}></UserDetails>

                    <div className={style.text_container}>
                      <p className={style.comment_text}>{comment.text}</p>
                    </div>
                    
                  </div>

                </div>
            ))}
        </div>
  )
}

export default CommentsFromPosT
