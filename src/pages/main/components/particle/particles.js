import React, { useEffect } from 'react';
import './particles.css'

function ParticlesGenerator(){

    useEffect(() => {

            /*                     STARS MOVEMENT               */
            const particula = document.querySelectorAll(".particle")

            window.addEventListener("mousemove", function(e) {
                let xPos = e.clientX - this.window.innerWidth / 2
                let yPos = e.clientY - this.window.innerHeight / 2
          
                particula.forEach(part => {
                  let speed = parseFloat(part.dataset.speed)
                  part.style.transform  = `translate(${-xPos/6 * speed}px, ${-yPos/6 * speed}px)`
                });
              }, [])
                  /*                     STARS MOVEMENT               */
                  
    })

    return(

    <section id='particles'>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
        <div className='particle' data-speed={Math.random() * 1.5 + .4} style={{top: Math.floor(Math.random() * 120) - 19 + "vh", left: Math.floor(Math.random() * 120) - 19 + "vw"}}></div>
    </section>

    );  
}

export default ParticlesGenerator