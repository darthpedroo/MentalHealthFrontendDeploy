import React, {useEffect } from 'react';

import styles from "./ansiedadScreen.module.css"
import HospitalHeader from "../../../../components/commonElements/hospitalHeader/HospitalHeader";
import { Link } from 'react-router-dom';

function Ansiedad(){

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        }, []);

    return(
        <div className={styles.ansiedad}>
            <HospitalHeader problem_value="ansiedad" isScrollLocked={true}></HospitalHeader>
            <section className={styles.main}>
                <div className={styles.title}>
                    ANSIEDAD
                </div>
                <div className={styles.flexBoxContainer}>
                    <div className={styles.flexBox}>
                        <div className={styles.title}>
                            ¿Qué es?
                        </div>
                        <div className={styles.text}>
                            <ul>
                                <li>
                                    La ansiedad es un sentimiento de miedo, temor e inquietud
                                </li>
                                <li>
                                    Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones
                                </li>
                                <li>
                                    Puede ser una reacción normal al estrés
                                </li>
                            </ul>
                        </div>
                        <div className={styles.flexBox2}>
                            <div className={styles.title}>
                                Trastorno de ansiedad
                            </div>
                            <div className={styles.text}>
                                <ul>
                                    <li>
                                        La ansiedad no desaparece y puede empeorar con el tiempo
                                    </li>
                                    <li>
                                        Los síntomas pueden interferir con las actividades diarias
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.flexBox2} `}>
                            <div className={styles.title}>
                                ¿Como se diagnostica?
                            </div>
                            <div className={`${styles.text} ${styles.big}`}>
                                <ul>
                                    <li>
                                        Historial médico
                                    </li>
                                    <li>
                                        Examen médico
                                    </li>
                                    <li>
                                        Preguntas
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flexBox}>
                    <div className={styles.title}>
                             Síntomas
                        </div>
                        <div className={`${styles.text} ${styles.bigger}`}>
                            <ul>
                                <li>
                                Pensamientos o creencias ansiosos difíciles de controlar
                                </li>
                                <li>
                                    Síntomas físicos, como latidos cardíacos, dolores, mareos y falta de aire
                                </li>
                                <li>
                                    Cambios en el comportamiento, como evitar las actividades cotidianas que solía hacer
                                </li>
                            </ul>
                        </div>
                        <div className={styles.flexBox2}>
                            <div className={styles.title}>
                                Tratamiento
                            </div>
                            <div className={`${styles.text} ${styles.bigger}`}>
                                <ul>
                                    <li>Psicoterapia:</li>
                                        <li>Terapia cognitivo-conductual</li>
                                        <li>Terapia de aceptación y compromiso</li>
                                    <li>Los medicamentos</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.flexBox2} ${styles.centerFlexbox}`}>
                            Fuentes:
                            <div className={styles.link}>
                                <Link target='blank' rel='noopener' to="https://medlineplus.gov/spanish/anxiety.html">https://medlineplus.gov/spanish/anxiety.html</Link>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>  
            </section>
           
        </div>


    );
}





export default Ansiedad