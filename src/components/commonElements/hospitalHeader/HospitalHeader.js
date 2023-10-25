import React, {useEffect} from 'react';
import './headerStyle.css';

import { Link } from "react-router-dom";


function HospitalHeader( {problem_value="out", main_value="out", isScrollLocked=false} ){ 
    /* 10 - Depresion   30 - TDAH   50 - Trauma   70 - Bullying   90 - Ansiedad*/


    /*https://chat.openai.com/share/5ecc729e-3f5a-4882-8e60-338a15a48c51 CAMBIE EL USEEFFECT DEL HEADER PORQE ANDABA MAL EN EL BLOG PAVOTE E EE E*/
    useEffect(() => {
        let ProblemToPosition = {
            depresion: 10,
            tdah: 30,
            trauma: 50,
            bullying: 70,
            ansiedad: 90,
            out: -10,
        }
    
        let MainToPosition = {
            atencion: 58.3,
            frases: 74.9,
            blog: 91.5,
            out: -10,
        }
    
        var problemValue = ProblemToPosition[problem_value]
        var mainValue = MainToPosition[main_value]
    
        let header = document.querySelector("#HospitalHeader")
    
        header.dataset.main = mainValue
        header.dataset.problem = problemValue
    
        headerMove()


        if (isScrollLocked) {
            header.style.top = "0"
        } else {
            function handleScroll () {
                const mainHeader = document.querySelector("#HospitalHeader")

                if (mainHeader) { 

                    if ((window.scrollY > 100)) {
                        mainHeader.style.top = "0";
                      } else {
                        mainHeader.style.top = "-80px";
                      }

                }

              };
    
            window.addEventListener('scroll', handleScroll);
            
          
              // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

        
    
    }, [problem_value, main_value]) // Add problem_value and main_value as dependencies to useEffect
    


    const selectorMove = (event) => {
        let problems_header = document.getElementsByClassName("problems-header")[0]
        let selector = document.querySelectorAll(".header-list .selector") //Esto selecciona los 2 cursores

        let target = event.target
        let pos = parseFloat(target.dataset.pos)

        if (target.classList.contains("main-option")) { // Para saber cual de los 2 selectores mostrar 
            selector = selector[0] // top-header cursor 
        } else {
            selector = selector[1] // bottom-header cursor 
        }

        if (target.classList.contains("problems") || target.classList.contains("problem-option")) { //Muestra el menu de problemas  (no se puede hacer con css)
            problems_header.classList.add("problems-header-on-hover")
        } else if (problems_header.classList.contains("problems-header-on-hover")) {
            problems_header.classList.remove("problems-header-on-hover")
        }

        selector.style.left = `calc(${pos}% - (5%/2))`
    }

    const headerMove = (event) => {
        let problems_header = document.getElementsByClassName("problems-header")[0]
        problems_header.classList.remove("problems-header-on-hover")

        let selector = document.querySelectorAll(".header-list .selector") //Esto selecciona los 2 cursores
        let header = document.querySelector("#HospitalHeader")

        selector[0].style.left = `calc(${header.dataset.main}% - (5%/2))`
        selector[1].style.left = `calc(${header.dataset.problem}% - (5%/2))`
    }



    return(
    <header id="HospitalHeader" onMouseLeave={headerMove} data-main="" data-problem="">

        <div className="hospital-header main-header">
            <ul className="header-list">
                <li className="element title-element"> {/* data-pos = porcentaje del width donde se encuentra el elemento */}
                    <div className='img-container'><img className='logo' src={require('../../../assets/images/hospital/logo.png')} alt='Logo de la pagina'></img></div>
                    <h1 className="header-option header-title"><Link to="/main">HOSPITAL HATER</Link> </h1>
                </li>  {/* selectorMove() utiliza data-pos para mover el cursor que se encuentra en el header */}
                <li className="element"><Link to="" className="header-option   hoverEffect  main-option problems" style={{"--hover-color": 'pink'}} data-pos="58.3" onMouseOver={selectorMove}>ATENCION</Link></li> 
                <li className="element"><Link to="/frases" className="header-option   hoverEffect main-option" style={{"--hover-color": 'olivedrab'}} data-pos="74.9" onMouseOver={selectorMove}>FRASES</Link></li>
                <li className="element"><Link to="/blog" className="header-option   hoverEffect main-option" style={{"--hover-color": 'darkgreen'}} data-pos="91.5" onMouseOver={selectorMove}>BLOG</Link></li>
                <li className="mobile mobile-element">
                    <img src={require("../../../assets/images/header/menu_icon.png")} alt="Menu Icon" className="mobile-icon" />
                </li>
                <div className="selector" ></div>
            </ul>
        </div>

        <div className="hospital-header problems-header" onMouseLeave={headerMove}>
            <ul className="header-list">
                <li className="element"><Link to="/depresion" className="header-option   hoverEffect  problem-option" style={{"--hover-color": 'aqua'}} data-pos="10" onMouseOver={selectorMove}>DEPRESION</Link></li>
                <li className="element"><Link to="/tdah" className="header-option   hoverEffect  problem-option" style={{"--hover-color": 'orange'}} data-pos="30" onMouseOver={selectorMove}>TDAH</Link></li>
                <li className="element"><Link to="/trauma" className="header-option   hoverEffect  problem-option" style={{"--hover-color": 'indigo'}} data-pos="50" onMouseOver={selectorMove}>TRAUMA</Link></li>
                <li className="element"><Link to="/bullying" className="header-option   hoverEffect  problem-option" style={{"--hover-color": 'yellow'}} data-pos="70" onMouseOver={selectorMove}>BULLYING</Link></li>
                <li className="element"><Link to="/ansiedad" className="header-option   hoverEffect  problem-option" style={{"--hover-color": 'red'}} data-pos="90" onMouseOver={selectorMove}>ANSIEDAD</Link></li>
                <div className="selector" ></div>
            </ul>
        </div>

    </header>
    );   
}
export default HospitalHeader;