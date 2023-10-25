import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import formStyle from './Form.module.css'
import AuthContext from '../../../../context/AuthContext';

import  ProfilePicture  from '../../../user/components/profilePic/ProfilePic'
import HospitalHeader from '../../../../components/commonElements/hospitalHeader/HospitalHeader'

function Form() {

    const {user} = useContext(AuthContext);

    let navigate = useNavigate();


    const [post, setPost] = useState({
        title: '',
        text: '',
        idUser: user['pk'],
    });
    
    const handleInput = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value,
            idUser: user['pk'], // Add the user here
        });
    };

    function handleSubmit(event) {
        event.preventDefault(); 


        console.log(post)
        axios
            .post('https://darthpedro.pythonanywhere.com/add/', post) // Send 'post' directly, not wrapped in an object ANTES NO ANDABA PORQUE ESTABA ENTRE {}
            .then((response) => console.log("RESPONSE: ", response))
            .catch((err) => console.log(err));

       // console.log("POST: ", post)
        
        
      //  console.log("Usuario: ", user['username'])
        navigate('/blog')
    }

    return (
        <div className={formStyle.page}>
            <HospitalHeader isScrollLocked={true}></HospitalHeader>
            <div className={formStyle.container}>

                <div className={formStyle.submit_section}>
                    <div className={formStyle.submit_title_container}>
                        <div className={formStyle.submit_padding}>
                            <h1 className={formStyle.submit_title}>Crea un post</h1>
                        </div>
                        <hr className={formStyle.submit_line} />
                    </div>

                    <div className={formStyle.submit_container_container}>
                        <div className={formStyle.submit_container}>
                            <div className={formStyle.picture_container} >
                                <ProfilePicture data={(user ? user.user_id : "")}></ProfilePicture>
                            </div>

                            <form className={formStyle.submit_form} onSubmit={handleSubmit}>
                                <div className={formStyle.box}>
                                    <div className={formStyle.input_container}>
                                        <input 
                                        type="text" 
                                        onChange={handleInput} 
                                        name="title" 
                                        placeholder='Titulo'
                                        className={formStyle.input}></input>
                                    </div>
                                    
                                    <div className={formStyle.textarea_container}>
                                        <textarea 
                                        type="text" 
                                        onChange={handleInput} 
                                        name="text" 
                                        placeholder='Escribe tu post'
                                        className={formStyle.textarea}></textarea>
                                    </div>

                                    <div className={formStyle.button_container}>
                                        <button className={formStyle.button}>Subir nuevo post</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={formStyle.rules_section}>
                    <div className={formStyle.rules_background}>
                        <div className={formStyle.rule_title_container}>
                            <h1 className={formStyle.rule_title}>Reglas a tener en cuenta</h1>
                            <hr className={formStyle.rule_line} />
                        </div>

                        <ul className={formStyle.rules_container}>
                            <li className={formStyle.rule_element}>
                                <div className={formStyle.number_container}>
                                    <h1 className={formStyle.number}>01</h1>
                                </div>

                                <h2 className={formStyle.rule_text}>No insultes a nadie</h2>
                            </li>
                            <li className={formStyle.rule_element}>
                                <div className={formStyle.number_container}>
                                    <h1 className={formStyle.number}>02</h1>
                                </div>

                                <h2 className={formStyle.rule_text}>Ponete en el lugar del otro</h2>
                            </li>
                            <li className={formStyle.rule_element}>
                                <div className={formStyle.number_container}>
                                    <h1 className={formStyle.number}>03</h1>
                                </div>

                                <h2 className={formStyle.rule_text}>Motiva a los demas</h2>
                            </li>
                            <li className={formStyle.rule_element}>
                                <div className={formStyle.number_container}>
                                    <h1 className={formStyle.number}>04</h1>
                                </div>

                                <h2 className={formStyle.rule_text}>Incita a los demas a ser mejores</h2>
                            </li>
                        </ul>

                    </div>

                    <hr className={formStyle.rule_container_line} />

                </div>

            </div>
        </div>
    );
}

export default Form;
