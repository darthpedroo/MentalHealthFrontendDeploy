// api.js

import axios from 'axios';

export const fetchSinglePost = (postId) => {
 // console.log(postId)
  return axios.get(`https://darthpedro.pythonanywhere.com/posts/${postId}`)
    .then(res => res.data)
    .catch(err => {
    //  console.error('Error:', err);
      throw err;
    });
};

export const fetchLikes = (postId, pk) => {
  return axios.get(`https://darthpedro.pythonanywhere.com/likes/${postId}/${pk}`)
  .then(res => res.data)
  .catch(err =>{
    throw err;
  })
}

export const fetchLikes2 = () => {
  return axios.get(`https://darthpedro.pythonanywhere.com/likes/`)
  .then(res => res.data)
  .catch(err =>{
    throw err;
  })
}

export const fetchComments = (postId) => {
 // console.log("Fetching Comments...")

  return axios.get(`https://darthpedro.pythonanywhere.com/comments/${postId}`)
  .then(res => {
 //   console.log('Response Comments:', res);
    return res.data;
  })
    .catch(err => {
 //     console.error('Error:', err);
      throw err;
    });
}

export const fetchPostsLIFO = () => {
 // console.log('Fetching posts...');
  return axios.get('https://darthpedro.pythonanywhere.com/postsLIFO',)
  
    .then(res => {
    //  console.log('Response:', res);
      return res.data;
    })
    .catch(err => {
 //     console.error('Error:', err);
      throw err;
    });
};


export const fetchPostsFIFO = () => {
  // console.log('Fetching posts...');
   return axios.get('https://darthpedro.pythonanywhere.com/postsFIFO',)
   
     .then(res => {
     //  console.log('Response:', res);
       return res.data;
     })
     .catch(err => {
  //     console.error('Error:', err);
       throw err;
     });
 };
