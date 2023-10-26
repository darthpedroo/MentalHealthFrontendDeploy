import React from 'react';
import {Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import MainScreen from './pages/main/page/mainScreen';
import DepresionScreen from './pages/hospitalPages/depresion/page/depresionScreen';
import TdahScreen from './pages/hospitalPages/tdah/page/tdahScreen';
import TraumaScreen from './pages/hospitalPages/trauma/page/traumaScreen';
import BullyinScreen from './pages/hospitalPages/bullying/page/bullyingScreen';
import Blog from './pages/blog/page/blog';
import PostPage from './pages/post/page/PostPage'
import CreatePost from './pages/submit/page/CreatePost';
import LoginScreen from './pages/login/page/LoginScreenTemp';
import PrivateRoute from './components/utils/PrivateRoute'
import UserPage from './pages/user/page/UserPage';
import Register from './pages/register/page/Register';
import HospitalScreen from './pages/hospitalPages/hospital/page/hospitalScreen';
import Phrases from './pages/phrases/phrases';
import AnsiedadScreen from './pages/hospitalPages/ansiedad/page/ansiedadScreen'


import { AuthProvider } from './context/AuthContext';

class App extends React.Component {

  
  //si no se pone exact, todas las qeu empiezne con / puededn renderizar el componente
  render() {
    return (
        <BrowserRouter basename="/MentalHealthFrontendDeploy">
      <AuthProvider>
      <Routes>

    <Route path="/" exact element={<MainScreen></MainScreen>}/> 
    <Route path = "/blog" element={<Blog></Blog>}></Route>
    <Route path = "/blog/:id" element = {<PostPage></PostPage>}></Route>
    <Route path = "/depresion" element={<DepresionScreen></DepresionScreen>}></Route>
    <Route path="/tdah" element={<TdahScreen></TdahScreen>}></Route>
    <Route path="/frases" element={<Phrases></Phrases>}></Route>    
    <Route path='/trauma' element={<TraumaScreen></TraumaScreen>}></Route>
    <Route path='/bullying' element={<BullyinScreen></BullyinScreen>}></Route>
    <Route path="/main" element={<HospitalScreen></HospitalScreen>}></Route>    
    <Route path='/ansiedad' element={<AnsiedadScreen></AnsiedadScreen>}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path ="/submit" element  = {<CreatePost></CreatePost>}> </Route>
          
        </Route>
    
    <Route path ="/profile/:id" element = {<UserPage></UserPage>} ></Route>
    <Route path = "/login" element = {<LoginScreen></LoginScreen>}> </Route>
    <Route path = "/register" element = {<Register></Register>}></Route>
  </Routes>

  </AuthProvider>
    </BrowserRouter>
    
      
     //
    );
  }
}
;



export default App; // Export the App component as the default export
