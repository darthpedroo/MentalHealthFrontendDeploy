import {react, useEffect} from 'react'

import "./CommentButton.css"

const ButtonLike = ( { commentsQuantity } ) => {


  return (
    <button className='post-comments post-button'>

    <div className='comments-icon-container'>
      <span className='material-symbols-outlined comments-icon'>chat_bubble</span>
    </div>

    <div className='comments-number-container'>
      <h3 className='comments-number'>{commentsQuantity}</h3>
    </div>

  </button>
  )
}

export default ButtonLike
