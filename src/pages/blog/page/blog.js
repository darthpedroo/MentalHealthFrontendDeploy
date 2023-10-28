import React, { useState, useEffect, useContext } from 'react';
import Title from '../components/elements/title/Title';
import EveryPost from '../components/everyPost/EveryPost';
import HospitalHeader from '../../../components/commonElements/hospitalHeader/HospitalHeader';
import ShowProfile from '../../../components/commonElements/showProfile/ShowProfile';
import AuthContext from '../../../context/AuthContext';
import PostButton from '../components/elements/postButton/postButton';

import { fetchPostsFIFO , fetchLikes2 } from '../../../api';
import './Blog.css';


const Blog = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState([]);
  const [likesData, setLikesData] = useState([]);

  useEffect(() => {
  
    fetchData();
    
    
    fetchData2();
    
  }, []);



  const fetchData = () => {
      fetchPostsFIFO()
      .then((data) => {
        setDetails(data);
      })
      .catch((err) => {
        console.error(err);
      });
  
  };

  const fetchData2 = () => {
    fetchLikes2()
      .then((data) => {
        setLikesData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='blog'>
      <HospitalHeader main_value='blog'></HospitalHeader>
      <Title />
      <hr className='linea porky-retrasado' />
      { user  ? <PostButton header={"Crea un post"} subtitle={"Click para postear"} link={"submit"}></PostButton> : 
       <PostButton  header={"Logeate para crear un post"} subtitle={"Click para logearte"} link={"login"}></PostButton>}

      <EveryPost details={details} likes={likesData} className='everyPost' />

      <div className="blog-footer"></div>
      <ShowProfile details={details}></ShowProfile>
    </div>
  );
};

export default Blog;
