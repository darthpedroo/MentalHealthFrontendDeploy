import React, {useContext, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import AuthContext from '../../../context/AuthContext';


const RegisterForm = () => {
  const { registerUser} = useContext(AuthContext);

  useEffect(() => {
    
  })

  return (
    <div className="SubmitPage">
        <div className="title"><h1>Crear Cuenta</h1></div>
        <form className="form" onSubmit={registerUser}>
            <div className="box">
                <input type="text" name="username" placeholder="Usuario" />
                <input type="email" name="email" placeholder="Gmail" />
                <input type="password" name="password" placeholder="Contraseña " />
                <button className="button">Registrarse</button>
            </div>
        </form>
      </div>
  );
};

const Register = () => {
    let {user} = useContext(AuthContext)
    return (
      user ? <Navigate to="/personalProfile"/> : <RegisterForm></RegisterForm>
    );
  };
  
  export default Register;

  //