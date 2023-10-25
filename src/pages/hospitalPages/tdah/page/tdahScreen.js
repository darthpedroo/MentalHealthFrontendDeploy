import React, { useEffect, useState } from 'react';
import HospitalHeader from '../../../../components/commonElements/hospitalHeader/HospitalHeader';
import './tdahScreen.css';
import Popup from '../components/popUp/popUp'

function TdahScreen() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        }, []);
    
    const [randomText, setRandomtext] = useState("a");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    

    function GenerateRandomCharacter(){
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return letras[Math.floor(Math.random()*53)];
    }

    

    useEffect(() => {
        function MouseMovementHandler(event) { 
            setRandomtext(GenerateRandomText());
            setMousePosition({ x: event.clientX, y: event.clientY });
            document.documentElement.style.setProperty("--x", event.clientX + "px");
            document.documentElement.style.setProperty("--y", event.clientY + "px");
        }

        function GenerateRandomText() {
            let string = "";
            for (let i = 0; i < 16000; i++) {
                string += GenerateRandomCharacter();
            }
            return string;
        }

        
        const handleMouseMove = (event) => {
            MouseMovementHandler(event);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    
    
    return (
        <div className='tdah'>
            <HospitalHeader problem_value={"tdah"}></HospitalHeader>
            <div id='page'>
                    
                    
                    <Popup>
                        
                    </Popup>

                    <div className='background'>
                        <div className='mask' style={{ left: mousePosition.x, top: mousePosition.y }}></div>
                        <div className='randomletters'>{randomText}</div>
                    </div>
                    
                    <div id='section-container'>
                        <section className='inicio'>
                            <div className='tdah-title-container'>
                                {/* eslint-disable-next-line */}
                                <marquee> <h1  className='tdah-title'>TDAH</h1> </marquee>
                                
                            </div>
                            <p className='subtitle'>(<b>T</b>rastorno por <b>D</b>éficit de <b>A</b>tención con <b>H</b>iperactividad)</p>
                            <p className='info-text'>Un trastorno crónico que comienza en la niñez y dura hasta la adultez.</p>
                        </section>

                        <section className='dato'>
                            <p className='pregunta'>¿Cómo es una persona con <b>TDAH</b>?</p>
                            <div className='explicacion'>
                                <p>Las personas con <strong>TDAH</strong> pueden presentar los siguientes síntomas:</p>
                                <ul className='caracteristicas'>
                                    <li>Inquietud</li>
                                    <li>Impulsividad</li>
                                    <li>Desorganización</li>
                                    <li>Problemas de Estrés</li>
                                    <li>Falta de Concentración</li>
                                    <li>Temperamento irascible</li>
                                 
                                </ul>
                            </div>
                        </section>

                        <section className='dato'>
                            <p className='pregunta'>¿Por qué surge el <b>TDAH</b>?</p>
                            <div className='explicacion'>
                                <p>La causa no es clara, pero algunas de las causas evaluadas son:</p>
                                <ul className='caracteristicas'>
                                    <li>Lesión cerebral</li>
                                    <li>Parto prematuro</li>
                                    <li>Bajo peso al nacer</li>
                                    <li>Exposicion ambiental</li>
                                    <li>Fumar durante el embarazo</li>
                                    <li>Alcohol durante el embarazo</li>
                                </ul>
                            </div>
                        </section>

                        <section className='dato'>
                            <p className='pregunta'>¿Cómo se trata el <b>TDAH</b>?</p>
                            <div className='explicacion'>
                                <p>Se pueden tratar con terapia conductal y medicamentos como:</p>
                                <ul className='caracteristicas'>
                                    <li>
                                        <a href='https://es.wikipedia.org/wiki/Metilfenidato' target='_blank' rel='noreferrer'>Metilin (Metilfenidato)</a>
                                    </li>
                                    <li>
                                        <a href='https://es.wikipedia.org/wiki/Metilfenidato' target='_blank' rel='noreferrer'>Ritalin (Metilfenidato)</a>
                                    </li>
                                    <li>
                                        <a href="https://es.wikipedia.org/wiki/Adderall" target='_blank' rel='noreferrer'>Aderall (Anfetaminas)</a>
                                    </li>
                                    <li>
                                        <a href="https://es.wikipedia.org/wiki/Atomoxetina" target='_blank' rel='noreferrer'>Strattera (Atomoxetina)</a>
                                    </li>
                                    <li>
                                            <a href='https://es.wikipedia.org/wiki/Dexmetilfenidato_(medicaci%C3%B3n)' target='_blank' rel='noreferrer'>Focalin (Dexmetilfenidato)</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    
                        <footer id="footer">
                            <h3 className='footertext'>Pagina diseñada por:</h3>
                            <h3 className='footertext'>Juan I. Dragan</h3>
                        </footer>
                    </div>

            </div>
        </div>
    );
}

export default TdahScreen