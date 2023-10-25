import React from 'react';
import styles from './depresionScreen.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState} from 'react';
import HospitalHeader from '../../../../components/commonElements/hospitalHeader/HospitalHeader';
import CustomCursor from '../../../../components/commonElements/customCursor/customcursor';

gsap.registerPlugin(ScrollTrigger);

function DepresionScreen() {
  const [index, setIndex] = useState(0);
  const [light, setlight] = useState(0);
  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, rgb(150, 150, 150), rgb(22, 22, 22))`,
    pointerEvents: 'none',
    opacity: light,
    transition: 'opacity 2s',
  };

  let DepresionText = [
    'La depresión es cuando estás triste',
    'La depresión es una enfermedad mental',
    'La depresión es una enfermedad mental causada por exceso de tristeza',
    'La depresión es una enfermedad mental causada por un desbalance de quimicos en el cerebro',
  ];
  let pageActive = index >= 3;

  function HandleClick() {
    if (!pageActive) {
      setIndex(index + 1);
      setlight(light + 0.33);
    }
  }

  return (
    <div className={styles.page}> {/* Use the styles object for class names */}
      <HospitalHeader problem_value={'depresion'}></HospitalHeader>
      <body>
        <div className={styles.mainPage}> {/* Use the styles object for class names */}
          <div className={styles.depresionBox}> {/* Use the styles object for class names */}
            <div className={styles.depresionText}> {/* Use the styles object for class names */}
              <p>{DepresionText[index]}</p>
            </div>
            <button
              className={styles.readMore}
              onClick={HandleClick}
              style={{
                opacity: !pageActive ? '1' : '0',
                cursor: !pageActive ? 'pointer' : 'none',
              }}
            >
              Leer mas
            </button>
          </div>
          {pageActive && (
            <div className={styles.depresionInfo}> {/* Use the styles object for class names */}
              <div className={`${styles.container} ${styles.sintomas}`}> {/* Use the styles object for class names */}
                <h1>Sintomas</h1>
                <ul> <li>Sentimientos de tristeza, ganas de llorar, vacío o desesperanza</li> <li>Arrebatos de enojo, irritabilidad o frustración, incluso por asuntos de poca importancia</li> <li>Pérdida de interés o placer por la mayoría de las actividades habituales o todas, como las relaciones sexuales, los pasatiempos o los deportes</li> <li>Alteraciones del sueño, como insomnio o dormir demasiado</li> <li>Cansancio y falta de energía, por lo que incluso las tareas pequeñas requieren un esfuerzo mayor</li> <li>Falta de apetito y adelgazamiento, o más antojos de comida y aumento de peso</li> <li>Ansiedad, agitación o inquietud</li> <li>Lentitud para razonar, hablar y hacer movimientos corporales</li> <li>Sentimientos de inutilidad o culpa, fijación en fracasos del pasado o autorreproches</li> <li>Dificultad para pensar, concentrarse, tomar decisiones y recordar cosas</li> <li>Pensamientos frecuentes o recurrentes sobre la muerte, pensamientos suicidas, intentos suicidas o suicidio</li> <li>Problemas físicos inexplicables, como dolor de espalda o de cabeza</li> </ul>
              </div>
              <div className={`${styles.container} ${styles.causas}`}> {/* Use the styles object for class names */}
                <h1>Causas</h1>
                <ul> <li>Diferencias biológicas. Las personas con depresión tienen cambios físicos en el cerebro. La importancia de estos cambios aún es incierta, pero con el tiempo pueden ayudar a identificar las causas.</li><li>Química del cerebro. Los neurotransmisores son sustancias químicas que se encuentran naturalmente en el cerebro y que probablemente desempeñan un rol en la depresión. Las investigaciones recientes indican que los cambios en la función y el efecto de estos neurotransmisores, y cómo interactúan con los neurocircuitos involucrados en mantener la estabilidad del estado de ánimo pueden tener un rol importante en la depresión y su tratamiento.</li><li>Hormonas. Es posible que los cambios en el equilibrio hormonal del cuerpo tengan un rol al causar o desencadenar la depresión. Los cambios hormonales pueden presentarse en el embarazo y durante las semanas o meses después del parto (posparto), y por problemas de tiroides, menopausia u otros trastornos.</li> <li>Rasgos hereditarios. La depresión es más frecuente en las personas cuyos parientes consanguíneos también tienen este trastorno. Los investigadores están buscando genes que puedan intervenir en el origen de la depresión.</li> </ul>
              </div>
              <div className={`${styles.container} ${styles.ayuda}`}> {/* Use the styles object for class names */}
                <h1>Cuándo pedir ayuda de urgencia</h1>
                <p>Si crees que puedes lastimarte o intentar suicidarte, llama de inmediato al 911 en los Estados Unidos o al número local de emergencias.</p>
                <p>Además, considera estas opciones si tienes pensamientos suicidas:</p>    
                <ul><li>Llama al médico o profesional de la salud mental.</li><li>Llama a la línea directa para prevención del suicidio.</li><li>Comunícate con un amigo íntimo o un ser querido.</li><li>Ponte en contacto con un pastor, un líder espiritual u otra persona de tu comunidad religiosa.</li></ul>
              </div>
            </div>
          )}
          <div style={overlayStyle}></div>
          <CustomCursor />
        </div>
      </body>
      
    </div>
  );
}

export default DepresionScreen;
