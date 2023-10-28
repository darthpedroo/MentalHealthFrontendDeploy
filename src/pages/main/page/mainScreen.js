import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';
import '../../../assets/globalCSS/fonts.css';
import '../../../assets/globalCSS/global.css';
import '../../../assets/globalCSS/colors.css';

import './Main.css';


import ParticlesGenerator from '../components/particle/particles';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { Power4 } from 'gsap/src/index';


/* eslint-disable no-restricted-globals */  /* NO BORRAR */

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger)
gsap.registerEase(Power4.easeInOut)

function MainScreen() {


  useEffect(() => {
    const title = document.querySelector("#title .text")
    const arrow = document.querySelector("#title .arrow-container")
    const afterHeader = CSSRulePlugin.getRule("#cabeza .background::after")
    const beforeHeader = CSSRulePlugin.getRule("#cabeza .background::before")

          /*      SCROLL ANIMATION     */
          gsap.timeline({
            scrollTrigger: {
              trigger: "#desc",
              start: "top bottom",
              end: "top center",
              scrub: true,
            } 
          })
  
        .to(title, {fontSize: 40, top: 5}, 0)
        .to(arrow, {bottom: -300}, 0)
        .to(afterHeader, {cssRule: {top: -3}}, 0)
        .to(beforeHeader, {cssRule: {top: 0}}, 0)
        /*      SCROLL ANIMATION     */


    const ua = navigator.userAgent;
    console.log(ua)
    if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent) ) {

      /*                ELEMENTS DECLARATION                  */
      const particula = document.querySelectorAll(".particle")
    
      document.querySelector("body").classList.toggle("overflow-disabled");

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }


      /*          STARTING  ANIMATION         */
        let tl = gsap.timeline({
          defaults: {
              ease: Power4.easeInOut,
              duration: 2
            }
        })


        tl.from(title, 2, {top: 0 - parseInt(getComputedStyle(title).height)})
        tl.from(arrow, 1, {bottom: -100}, "+1")
    
        particula.forEach(part => {
          let speed = parseFloat(part.dataset.speed)
          tl.from(part, .7+speed, {top: -150}, "+1")
        });

        setTimeout(() => {
          //document.querySelector("body").style.overflowY = "auto"
          document.querySelector("body").classList.toggle("overflow-disabled");
        }, 2500);
      /*          STARTING  ANIMATION         */

    }
    }, [])



  return (

    <div id="page">
      
        <header id='cabeza'>
          <nav>
            <div className='background'></div>
          </nav>
        </header>

        <section id="title">
          <div className="text"><h1>SALUD   MENTAL</h1></div>
          <div className='arrow-container'>
            <div className='arrow a1'></div>
            <div className='arrow a2'></div>
            <div className='arrow a3'></div>
          </div>
        </section>

        <section id="desc">
            <h2 className="title">DESCRIPCION</h2>
            <div className="text"><p>Esta es una página cuyo objetivo es concientizar acerca de las estigmatizaciones y discriminaciones que sufren las personas, y cómo estas actitudes y comportamientos pueden tener un impacto significativo en su salud mental. A través de la educación, la promoción de la empatía y el entendimiento, esta plataforma se esfuerza por crear conciencia sobre las consecuencias del estigma y la discriminación, con la esperanza de fomentar un ambiente más inclusivo y de apoyo para todas las personas.</p></div>
        </section>

        <section id="button">
          <div className="buttonContainer">
            <Link to ="/main"><button className="StartButton"><span>Comenzar Experiencia</span></button></Link>
          </div>
        </section>

        <footer id="footer">
          <h3 className="title">Pagina diseñada por:</h3>
          <h3 className="members">Joaquin Fernandez - Pedro Villarino - Benicio Verdun - Galofa Achille - Juani Dragan</h3>
        </footer>

        <ParticlesGenerator></ParticlesGenerator>

    </div>



  );
}

export default MainScreen;