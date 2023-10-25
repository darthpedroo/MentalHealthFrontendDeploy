import React, { useState , useEffect } from 'react';
import axios from 'axios';

import bannerStyle from './Banner.module.css'

const Banner = ({data}) => {

    const [currentBanner , setBanner] = useState(null)

    useEffect(()=>{

        if(data){ 
            axios
            .get(`https://darthpedro.pythonanywhere.com/images/${data}/`)
            .then((res => {

                if(res.data.banner !== null){
                    setBanner(`https://darthpedro.pythonanywhere.com${res.data.banner.replace(/^\/media\/profilepics\//, '')}`)
                    //OJO CON ESTO CAPAZ EST A MAL EL FETCH EXEEDE
                }

            }))
            .catch((error)=>{
                console.error("Error fetching image:", error);
            })
        }
    },[data])

  return (

    <div className={bannerStyle.banner_container}>
        {/*<label>Foto del Baner: </label>*/}
        {currentBanner !== null ? (<img className={bannerStyle.banner} src ={(currentBanner)} ></img>)
        : <img className={`${bannerStyle.banner} ${bannerStyle.skeleton}`}  alt=''></img>    
    } 
    </div>
  )


 
}

export default Banner
