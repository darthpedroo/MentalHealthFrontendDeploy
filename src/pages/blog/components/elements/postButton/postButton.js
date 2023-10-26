import React from "react";
import { Link } from "react-router-dom";

import buttonStyle from './postButton.module.css'

function PostButton({subtitle,header,link}){

    return(

        <div className={buttonStyle.post} id={buttonStyle.section}>

        <Link className={`link ${buttonStyle.post_link}`} to={`http://localhost:3000/MentalHealthFrontendDeploy/${link}`}>
        

            <div className={`${buttonStyle.title_container} ${buttonStyle.container}`}>
                
                <h1 className={buttonStyle.title}>{header}</h1>
                <h3 className={buttonStyle.subtitle}>{subtitle}</h3>

            </div>
        
        </Link>
        
        </div>);
}


export default PostButton

