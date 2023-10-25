import React, { useEffect    } from 'react';
import HospitalHeader from '../../../../components/commonElements/hospitalHeader/HospitalHeader';
import './traumaScreen.css';

function TraumaScreen() {
    const traumaPsiquico = 'https://es.wikipedia.org/wiki/Trauma_ps%C3%ADquico'
    const clickSubtitulo = () => {
        alert('bú :vvv te asusté')
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        }, []);

    return (
        <div className='trauma'>
            <HospitalHeader problem_value={"trauma"}></HospitalHeader>
            <div id='page'>
                <body id='pagebody'>
                    <div className='main'>
                        <h1 className='main-title'>TRAUMA</h1>
                        <a className='under-title' href={traumaPsiquico} target='_blank' rel="noreferrer">Psicologico</a>
                        <h2 className='main-subtitle' onClick={clickSubtitulo}>¿Qué es?</h2>
                        <div className='info-trauma'>
                            <p>Podemos definir trauma como una emoción o impresión negativa fuerte que produce un daño duradero</p>
                            <p>Un trauma surge tanto porque has sufrido recientemente un miedo de gran intensidad (terror) o <br></br> porque te has sentido incapaz de manejar un peligro real o potencial.</p>
                            <p><br></br>
                                Una persona con trauma puede sentirse abrumada, indefensa, conmocionada <br></br>o tener dificultades para procesar sus experiencias, sean similares a la causa del trauma o por recordarlo.
                            </p>
                        </div>
                        <div className='info-trauma'>
                            <p>El trauma también puede causar daño físico.</p>
                            <p>Además, puede tener efectos prolongados en el bienestar de una persona</p>
                        </div>
                        <h2 className='main-subtitle'>¿Como se trata?</h2>
                        <div className='info-trauma'>
                            <p>La mejor manera de tratar un trauma psicologico es via psicoterapia</p>
                            <p><br></br>Aquel paciente del trauma psicologico se reunira con un especialista por 45 a 60 minutos <br></br> en los cuales el 
                            especialista reunirá información y necesidades del paciente <br></br> que luego utilizará para aplicar distintos métodos, siendo  Terapia Cognitiva Conductual, <br></br> Terapia Conductual dialéctica, Psicoterapia de Apoyo y Psicoterapia interpersonal</p>
                        </div>

                        <div className='info-trauma'>
                            <p>Otras técnicas alternativas incluyen:</p>
                            <p>
                                <br></br>
                                <ul>
                                    <li>
                                        Hipnosis: El paciente está relajado pero atento, que produce una disminución de la activación cortical <br></br>
                                        Permite restructurar recuerdos y disminuir el impacto negativo que se produce en nuestras emociones
                                    </li>
                                    <li>
                                        Técnicas Minfulness: consiste en ejercicios mentales para combatir el impacto traumático. <br></br> Es un tipo de meditación que ayuda al paciente a paliar los malestares mentales, <br></br> prestando atención al momento y dejando de lado las cosas banales que le rodean.
                                    </li>
                                    <li>
                                        Brainspotting: aborda los traumas desde una perspectiva profunda y transformadora, <br></br> lo que ayuda al paciente a superar las heridas emocionales provocadas por el hecho traumático. <br></br> La técnica consiste en conectar las reacciones emocionales y físicas con el objetivo de <br></br> identificar el punto cerebral y liberar las emociones bloqueadas.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <footer id="footer">
                        <h3 className='footertext'>Pagina diseñada por:</h3>
                        <h3 className='footertext'>Juan I. Dragan</h3>
                    </footer>
                </body>
            </div>
        </div>
    );
}

export default TraumaScreen