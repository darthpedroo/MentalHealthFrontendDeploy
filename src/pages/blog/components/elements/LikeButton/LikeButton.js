import React from "react"
import "./LikeButton.css"
import '../post_button.css'

const ButtonLike = ( {buttonState="", likesQuantity} ) => {

  return (
    <button className={`post-likes post-button ${buttonState}`}>

    <div className='like-heart-container'>
      <div className='heart'></div>
    </div>

    <div className='like-number-container'>
      <h3 className='like-number'>{likesQuantity}</h3>
    </div>

  </button>
  )
}

export default ButtonLike
