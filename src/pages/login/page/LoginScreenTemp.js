import React, {useContext, useEffect} from 'react'
import {Navigate } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext';

import './LoginScreen.css'

const LoginForm = () => {
  const {loginUser} = useContext(AuthContext);
  const {registerUser} = useContext(AuthContext);

 

    function titleChange(newTitle, titleCont, titleText) {
       titleCont.classList.add("title-animation")
        setTimeout(() => {
            titleText.innerHTML = newTitle
            titleCont.classList.remove("title-animation")
        }, 1000);
    }

    function textContainerChange(newText, newTextButton, textContainer, text, textButton, buttonContainer) {

        let offset_y = Math.abs(buttonContainer.getBoundingClientRect().y - textContainer.getBoundingClientRect().y)

        textContainer.style.transform = `translateY(${offset_y + 10}px)`
        setTimeout(() => {
            text.innerHTML = newText
            textButton.innerHTML = newTextButton
            textContainer.style.transform = `translateY(0)`
        }, 1000);
    }

    function variablesDeclaration() {
        let inputContainerVar = document.getElementsByClassName("inputinput")[0]
        let emailInputVar = document.querySelector(".email-input")
        let passwordInputVar = document.querySelector(".password-input")
        let titleContainerVar = document.querySelector(".form-title")
        let titleTextVar = document.querySelector(".form-title h2")
        let textContainerVar = document.querySelector(".text-container")
        let textVar = document.querySelector(".text-container p")
        let textButtonVar = document.querySelector(".text-container a")
        let formBoxVar = document.querySelector(".form-box")
        let emailInputContVar = document.querySelector(".email-input .input-text")
        let inputSectionVar = document.querySelector(".form-box .input-container")
        let buttonContainerVar = document.querySelector(".button-container")

        return {
            inputContainer: inputContainerVar,
            emailInput: emailInputVar,
            passwordInput: passwordInputVar,
            titleContainer: titleContainerVar,
            titleText: titleTextVar,
            textContainer: textContainerVar,
            text: textVar,
            textButton: textButtonVar,
            formBox: formBoxVar,
            inputEmail: emailInputContVar,
            inputSection: inputSectionVar,
            buttonContainer: buttonContainerVar,
        }
    }

    function signInAnimation(data) { /* data is a dict with all the variables needed */
        data["passwordInput"].classList.remove("register-password")
        data["emailInput"].classList.remove("register-email")
        data["inputEmail"].disabled = true
        data["textContainer"].classList.remove("register-on")
        data["inputSection"].classList.remove("input-container-register")

        titleChange("SIGN IN", data["titleContainer"], data["titleText"])

        textContainerChange("¿No tienes una cuenta?", "Crear Una", data["textContainer"], data["text"], data["textButton"], data["buttonContainer"])

        setTimeout(() => { /* elimina el texto de email-input */
            let inputEmail = document.querySelector(".email-input .input-text")
            inputEmail.value = ""

            let spanEmail = document.querySelector(".email-input .input-tag")
            spanEmail.classList.remove("input-text-writen")
        }, 1000);

        data["formBox"].dataset.state = "login"
    }

    function signUpAnimation(data) {
        data["passwordInput"].classList.add("register-password")
        data["emailInput"].classList.add("register-email")
        data["inputEmail"].disabled = false
        data["textContainer"].classList.add("register-on")
        data["inputSection"].classList.add("input-container-register")

        titleChange("SIGN UP", data["titleContainer"], data["titleText"])

        textContainerChange("¿Ya tienes una cuenta?", "Iniciar Sesion", data["textContainer"], data["text"], data["textButton"], data["buttonContainer"])

        data["formBox"].dataset.state = "register"
    }

    const placeHolderDisabled = (event) => {
        let inputCont = event.target
        let placeHolder = event.target.nextSibling

        if (inputCont.value != "") {
            placeHolder.classList.add("input-text-writen")
        } else {
            placeHolder.classList.remove("input-text-writen")
        }
    }

    const changePasswordVisibility = () => {
        const PasswordEye = document.querySelector(".eye-icon") // Could be replaced by 'event.target'
        const PasswordInput = document.querySelector(".password-input .input-text")
        let state = PasswordEye.dataset.state

        PasswordEye.src = require(`../../../assets/images/login/eye_${state}.png`)

        if (state === "open") {
            PasswordInput.type = "password"
            PasswordEye.dataset.state = "close"
        } else {
            PasswordInput.type = "text"
            PasswordEye.dataset.state = "open"
        }
    }

    const tomaPorky = (event) => {
        let formBox = document.querySelector(".form-box")
        if (formBox.dataset.state === "login") {
            loginUser(event)
        } else {
            registerUser(event)
        }
    }



  return (
    <div id="LoginScreen">
        <div className  ='login-container'>

            <div className='title-container'>
                <h1 className='title'>SALUD MENTAL</h1>
            </div>

            <div className='form-container' >

                <form className='form-box' data-state="login" onSubmit={tomaPorky}>

                    <div className='form-title'>
                        <h2>SIGN IN</h2>
                    </div>

                    <div className='input-container'>

                        <div className='input user-input'>
                            <img className='input-icon' src={require("../../../assets/images/login/user-icon.png")}></img>
                            <input className='input-text' name="username" type='text' onChange={placeHolderDisabled}></input>
                            <span className='input-tag'>User</span>
                        </div>

                        <div className='password-input-container'>

                            <div className='inputinput'>

                                <div className='input email-input'>
                                    <img className='input-icon' src={require("../../../assets/images/login/email-icon.png")}></img>
                                    <input className='input-text' name="email" type='email' onChange={placeHolderDisabled} disabled></input>
                                    <span className='input-tag'>Email</span>
                                </div>


                                <div className='input password-input'>
                                    <img className='input-icon' src={require("../../../assets/images/login/padlock-icon.png")}></img>
                                    <input className='input-text' name="password" type='password' onChange={placeHolderDisabled}></input>
                                    <span className='input-tag'>Password</span>
                                    <img className="input-icon eye-icon" data-state="close" onClick={changePasswordVisibility} src={require("../../../assets/images/login/eye_open.png")}></img>
                                </div>

                            </div>

                            <div className='text-container'>
                            <p className='text-question'>¿No tienes una cuenta?</p>
                            <a className='text-button' onClick={() => {if (document.querySelector(".email-input").classList.contains("register-email")) {signInAnimation(variablesDeclaration())} else {signUpAnimation(variablesDeclaration())}}} >Crear Una</a> {/* Change values depending on [login or signin]*/}
                            </div>

                        </div>

                    </div>

                    <div className='error-container'>
                        <h2 className='error-text'>asds{/* This text will be writen by a function*/}</h2>
                    </div>

                    <div className='button-container'>
                        <button className='form-button'>LOGIN</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  );
};




const LoginScreen = () => {
    let {user} = useContext(AuthContext)
    console.log(user)
    return (
      user ? <Navigate to={`/profile/${user.username}`}/> : <LoginForm></LoginForm>
    );
  };
  
  export default LoginScreen;


