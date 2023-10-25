import React, {useContext, useEffect} from 'react'
import {Navigate } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext';



const LoginForm = () => {
  const {loginUser} = useContext(AuthContext);

  return (
    <div className="SubmitPage">
        <div className="title"><h1>LOGIN</h1></div>
        <form className="form" onSubmit={loginUser}>
            <div className="box">
                <input type="text" name="username" placeholder="Usuario" />
                <input type="password" name="password" placeholder="Contraseña" />
                <button className="button">Login</button>
            </div>
        </form>
      </div>
  );
};

const LoginScreen = () => {
    let {user} = useContext(AuthContext)
    
    

    return (
      user ? <Navigate to={`/profile/${user.username}`}/> : <LoginForm></LoginForm>
    );
  };
  
  export default LoginScreen;

