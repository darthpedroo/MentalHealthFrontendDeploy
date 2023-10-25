import React,{useContext} from 'react'
import AuthContext from '../../../../../context/AuthContext'

const Title = () => {
  const { name } = React.useContext(AuthContext);

  return (
    <div>
        <h1 className = "title">BLOG</h1>
    </div>
  )
}

export default Title
