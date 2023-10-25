import React, { useEffect, useState, useContext } from 'react';
import SinglePost from '../components/singlePost/SinglePost';
import { fetchSinglePost,fetchComments, fetchLikes } from '../../../api';
import { useParams } from 'react-router-dom';

import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import ShowProfile from '../../../components/commonElements/showProfile/ShowProfile';
import style from "./PostPage.module.css"

const Blog = () => {
  const { id } = useParams(); // Access the postId parameter from the URL
  const { user } = useContext(AuthContext); //HAY QEU CHECKEAR QUE SI NO ESTAS LOGEADO TE DE ANONIMO, O QUE NO HAGA EL CODIFO Y TIRE UNA EXCECPION
  const [details, setDetails] = useState([]); // Initialize state to hold fetched details
  const [comments, setComments] = useState([]); // Initialize state to hold fetched details
  const [likes, setLikes] = useState([])




  useEffect(() => {


      fetchData(id);
      fetchComments2(id)
      fetchLikes2(id, user?.pk)

    
    

  }, [id, user?.pk]);
          
  const fetchData = (postId) => {
    fetchSinglePost(postId)
      .then(data => {
        setDetails(data);
      })
      .catch(err => {
      });
  }

  const fetchLikes2 = (postId, pk) => {
    fetchLikes(postId,pk)
    .then(data =>{ 
      setLikes(data[0]);
    })
    .catch(err => {

    })
  }

  const fetchComments2 = (postId) => {
    fetchComments(postId)
    
    .then(data=> {
    //  console.log("Data: ", data)
      setComments(data);
    })
    .catch(err =>{

    });
  }


  return (
    <div className={style.form}>
      
      <SinglePost details={details} comments={comments} likesProps={likes} />

      <ShowProfile></ShowProfile>
  
      
    </div>
  );
};

export default Blog;


