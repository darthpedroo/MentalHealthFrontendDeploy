import React, { useEffect } from 'react';
import HospitalHeader from '../../../../components/commonElements/hospitalHeader/HospitalHeader';
import './bullyingScreen.css';

function BullyingScreen() {
    const definicionBullying = 'https://www.google.com/search?q=definicion+de+bullying&oq=definicion+de+bullying&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDI2MjJqMWo3qAIAsAIA&sourceid=chrome&ie=UTF-8';

    const causaBullying = 'https://espanol.stopbullying.gov/bullying/why-some-youth-bully#:~:text=Algunos%20j%C3%B3venes%20acosan%20por%20los,qui%C3%A9nes%20no%20pertenecen%20al%20grupo.';

    const consecuenciasBullying = 'https://espanol.nichd.nih.gov/salud/temas/bullying/informacion/afecta#:~:text=Puede%20ocasionar%20lesiones%20f%C3%ADsicas%2C%20problemas,e%2C%20incluso%2C%20la%20muerte.&text=Aquellos%20que%20son%20v%C3%ADctimas%20de,de%20adaptaci%C3%B3n%20en%20la%20escuela.';

    const evitarBullying = 'https://espanol.stopbullying.gov/prevenci%C3%B3n-mkd2/c%C3%B3mo-prevenir-el-acoso-escolar';
    const leerMas = 'https://www.aeped.es/sites/default/files/documentos/entrega3_bullying.pdf';
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        }, []);

    return (
        <div className='bullying'>
            <HospitalHeader problem_value={"trauma"}></HospitalHeader>
            <div id='page'>
                <div className='main'>
                    <h1 className='title'>BULLYING</h1>
                    <p className='subtitle'>¿Por qué somos así?</p>
                </div>
                
                <div className='info-bully'>
                    <div className='pregunta'>
                        <a className='pregunta-title' href={definicionBullying} target='_blank' rel="noreferrer">
                            <strong>¿A qué refiere el bullying?</strong>
                        </a>
                        <p>El bullying es un termino proveniente del inglés, el cual refiere <br></br> al acoso o agresión para ejercer poder a otra persona</p>
                    </div>

                    <div className='pregunta'>
                        <a className='pregunta-title' href={causaBullying} target='_blank' rel="noreferrer">
                            <strong>¿Por qué se da el bullying?</strong>
                        </a>
                        <p>Hay varios motivos por los cuales los jovenes acosan, entre ellos:</p>
                        <ul className='lista-bully'>
                            <li>Para atraer o mantener el poder social.</li>
                            <li>Para elevar su estado en un grupo de compañeros.</li>
                            <li>Para mostrar su lealtad y encajar en su grupo</li>
                            <li>Para mostrar quienes sí o quienes no pertenecen al gurpo</li>
                        </ul>
                    </div>

                    <div className='pregunta'>
                        <a className='pregunta-title' href={consecuenciasBullying} target='_blank' rel="noreferrer">
                            <strong>¿Que consecuencias trae?</strong>
                            </a>
                        <p>El bullying puede llegar a ocasionar lesiones físicas,problemas sociales,<br></br>  problemas emocionales e incluso llegar a matar a una persona</p>
                        <p>La practica del bullying es capaz de  poner la vida de una persona en riesgo <br></br>por solo una pequeña "recompensa"</p>
                    </div>

                    <div className='pregunta'>
                        <a className='pregunta-title' href={evitarBullying} rel="noreferrer" target='_blank'>
                            <strong>¿Como se puede evitar?</strong>
                        </a>
                        <p className='niggermaxxer'>Contactar con los padres o con el adolescente que <br></br> esté acosando a la victimay dandoles a entender <br></br> el problema de lo que están haciendo.</p>
                        <p className='niggermaxxer'>Bastantes veces la causa del bullying proviene de falta de <br></br> atención en el que esté acosando a otro, <br></br> por lo que puede provenir desde sus casas.</p>
                        <p className='niggermaxxer'>Otorgar oportunidades a aquellos que están siendo <br></br> acosados de presentar sus problemas y poder ser <br></br> entedidos.</p>
                    </div>

                    <div className='other'>
                        <a className='leer-mas' href={leerMas} target='_blank' rel="noreferrer">Leer más...</a>
                    </div>
                </div>

                <footer id="bullying-footer">
                    <p className='footertext'>Pagina diseñada por:</p>
                    <p className='footertext'>Juan I. Dragan</p>
                </footer>
            </div>
        </div>
    );
}

export default BullyingScreen