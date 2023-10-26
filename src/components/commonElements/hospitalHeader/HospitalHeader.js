import React, {useEffect} from 'react';
import './headerStyle.css';

import { Link } from "react-router-dom";


function HospitalHeader( {problem_value="default", main_value="default", isScrollLocked=false} ){ 
    /* 10 - Depresion   30 - TDAH   50 - Trauma   70 - Bullying   90 - Ansiedad*/


    /*https://chat.openai.com/share/5ecc729e-3f5a-4882-8e60-338a15a48c51 CAMBIE EL USEEFFECT DEL HEADER PORQE ANDABA MAL EN EL BLOG PAVOTE E EE E*/
    useEffect(() => {

        let header = document.querySelector("#HospitalHeader")

        var problemInitialPosition = "out"
        var mainInitialPosition = "out"

        if (problem_value !== "default") {
            problemInitialPosition = "header-" + problem_value
        } if (main_value !== "default") {
            mainInitialPosition = "header-" + main_value
        }

        header.dataset.problem = problemInitialPosition
        header.dataset.main = mainInitialPosition
    
        headerMove()


        if (isScrollLocked) {
            header.style.top = "0"
        } else {
            function handleScroll () {
                const mainHeader = document.querySelector("#HospitalHeader")
                const hospital_header = document.querySelector("#HospitalHeader .main-header")
                const problems_header = document.querySelector("#HospitalHeader .problems-header")

                if (hospital_header && problems_header) { 

                    if ((window.scrollY > 100)) {
                        mainHeader.style.top = "0";
                      } else {
                        mainHeader.style.top = "-160px";
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
    


    const selectorHover = (event) => {
        let problems_header = document.getElementsByClassName("problems-header")[0]
        let selector = document.querySelectorAll(".header-list .selector") //Esto selecciona los 2 cursores
        let target = event.target

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

        selectorMove(target, selector)
    }

    const selectorMove = (target, selector) => {

        console.log(target)
        if (target === "out") {
            var pos = -100
            var target_width = 0
        } else {
            var pos = target.getBoundingClientRect().x //this gets the position in x according to the viewport
            var target_width = target.offsetWidth
        }

        let selector_width = selector.offsetWidth
        let width_offset = (target_width - selector_width) / 2

        selector.style.left = `${pos + width_offset}px`
    }

    const headerMove = (event) => {
        let problems_header = document.getElementsByClassName("problems-header")[0]
        problems_header.classList.remove("problems-header-on-hover")

        let selector = document.querySelectorAll(".header-list .selector") //Esto selecciona los 2 cursores
        let header = document.querySelector("#HospitalHeader")


        let target = [
            document.querySelector("." + header.dataset.main) || "out",
            document.querySelector("." + header.dataset.problem) || "out",
        ]
        selectorMove(target[0], selector[0])
        selectorMove(target[1], selector[1])

        document.querySelector(".mobile-container-option").classList.remove("on-hover-state")
    }   



    return(
    <header id="HospitalHeader" onMouseLeave={headerMove} data-main="" data-problem="">

        <div className="hospital-header main-header">
            <ul className="header-list">
                <li className="element title-element"> {/* data-pos = porcentaje del width donde se encuentra el elemento */}
                    <div className='img-container'><img className='logo' src={require('../../../assets/images/hospital/logo.png')} alt='Logo de la pagina'></img></div>
                    <h1 className="header-option header-title"><Link to="/main">HOSPITAL HATER</Link> </h1>
                </li>  {/* selectorMove() utiliza data-pos para mover el cursor que se encuentra en el header */}

                <div className="element-container">
                    <li className="element"><Link to="" className="header-option   hoverEffect  main-option problems" style={{"--hover-color": 'pink'}} onMouseOver={selectorHover}>ATENCION</Link></li> 
                    <li className="element"><Link to="/frases" className="header-option   hoverEffect main-option header-frases" style={{"--hover-color": 'olivedrab'}} onMouseOver={selectorHover}>FRASES</Link></li>
                    <li className="element"><Link to="/blog" className="header-option   hoverEffect main-option header-blog" style={{"--hover-color": 'darkgreen'}} onMouseOver={selectorHover}>BLOG</Link></li>
                </div>

                <li className="mobile mobile-element">
                    <img src={require("../../../assets/images/header/menu_icon.png")} alt="Menu Icon" className="mobile-icon" />
                </li>

                <ul className="mobile mobile-container-option">
                    <li className="option-item atencion-listener" onClick={() => {document.querySelector(".mobile-container-option").classList.toggle("on-hover-state")}}><Link className='option-link' to="">ATENCION</Link></li>

                    <li className="option-item"><Link className='option-link' to="/frases">FRASES</Link></li>

                    <li className="option-item"><Link className='option-link' to="/blog">BLOG</Link></li>

                    
                    <ul className="mobile mobile-container-atencion">
                        <li className="atencion-item"><Link className='option-link' to="/depresion">DEPRESION</Link></li>

                        <li className="atencion-item"><Link className='option-link' to="/tdah">TDAH</Link></li>

                        <li className="atencion-item"><Link className='option-link' to="/trauma">TRAUMA</Link></li>

                        <li className="atencion-item"><Link className='option-link' to="/bullying">BULLYING</Link></li>

                        <li className="atencion-item"><Link className='option-link' to="/ansiedad">ANSIEDAD</Link></li>
                    </ul>
                </ul>

                
                <div className="selector" ></div>
            </ul>
        </div>

        <div className="hospital-header problems-header" onMouseLeave={headerMove}>
            <ul className="header-list">
                <li className="element"><Link to="/depresion" className="header-option   hoverEffect  problem-option header-depresion" style={{"--hover-color": 'aqua'}} onMouseOver={selectorHover}>DEPRESION</Link></li>
                <li className="element"><Link to="/tdah" className="header-option   hoverEffect  problem-option header-tdah" style={{"--hover-color": 'orange'}} onMouseOver={selectorHover}>TDAH</Link></li>
                <li className="element"><Link to="/trauma" className="header-option   hoverEffect  problem-option header-trauma" style={{"--hover-color": 'indigo'}} onMouseOver={selectorHover}>TRAUMA</Link></li>
                <li className="element"><Link to="/bullying" className="header-option   hoverEffect  problem-option header-bullying" style={{"--hover-color": 'yellow'}} onMouseOver={selectorHover}>BULLYING</Link></li>
                <li className="element"><Link to="/ansiedad" className="header-option   hoverEffect  problem-option header-ansiedad" style={{"--hover-color": 'red'}} onMouseOver={selectorHover}>ANSIEDAD</Link></li>
                <div className="selector" ></div>
            </ul>
        </div>

    </header>
    );   
}
export default HospitalHeader;