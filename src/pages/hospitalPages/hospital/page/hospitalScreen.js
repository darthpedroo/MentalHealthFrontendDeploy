import React, { useEffect } from 'react';
import HospitalHeader from '../../../../components/commonElements/hospitalHeader/HospitalHeader';
import ChatBot from '../../../chatbot/chatbot'
import styles from './hospital.module.css'; // Import the CSS module

function HospitalScreen() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
    }, []);

  return (
    <div className={styles.hospitalContainer}>
      {/* Hospital Header and ChatBot */}
      <HospitalHeader isScrollLocked={true} />
      <ChatBot />
      {/* Banner */}
      <section className={styles.banner} >
        <img alt='crazy room' src={require('../../../../assets/images/hospital/hospital/cama.png')} height={400} width={600} />
        <div className={styles.bannerText}>
          <h1>Las mejores instalaciones de todo el país con paredes acolchadas</h1>
          <button className={styles.ctaButton}>Ver Instalaciones</button>
        </div>
      </section>

      {/* Hospital Info */}
      <section className={styles.hospitalInfo}>
        <h1>¿Quiénes somos?</h1>
        <div className={styles.infoText}>
          <p>Somos actualmente la empresa de hospitales más grande de la Argentina</p>
          <p>Contamos con más de 2000 sedes y más de 50000 profesionales disponibles</p>
          <p>Nuestra página tiene un bot que aprende de lo que responden las personas hacia los trastornos.</p>
        </div>
      </section>

      {/* Location */}
      <section className={styles.locationWrapper}>
        <LocationContainer barrio="Flores" calle="Av. Rivadavia" horario="Lun. a Viernes 08:00 a 20:00" image="locacion1" />
        <LocationContainer barrio="Avellaneda" calle="Av. Belgrano" horario="Lun. a Viernes 07:30 a 21:00" image="locacion2" />
        <LocationContainer barrio="Wilde" calle="Av. Mitre" horario="Lun. a Viernes 07:00 a 20:00" image="locacion3" />
        <LocationContainer barrio="Barracas" calle="Av. Patricios" horario="Lun. a Viernes 08:30 a 20:30" image="locacion4" />
      </section>

      {/* Services */}
      <section className={styles.servicesWrapper}>
        <Service telefono={"0-800-800-0800"} image={"icon1"}>Atención Telefónica</Service>
        <Service telefono={"0-800-312-0322"} image={"icon2"}>Central de Turnos</Service>
        <Service telefono={"(011)6789-1234"} image={"icon3"}>Emergencias</Service>
        <Service telefono={"(011)9999-444"} image={"icon4"}>Atención al Afiliado</Service>
      </section>

      {/* Footer */}
      <section className={styles.description}>
        <div className={styles.footerContainer}>
          <div className={styles.column}>
            <div className={styles.row}>
              <h3>Direcciones</h3>
              <h4>Sede Avellaneda</h4>
              <p>1222 Av Belgrano, Buenos Aires, Provincia de Buenos Aires</p>
              <p>CP C1199ABB</p>
              <p>Tel. (011)1274-9238</p>

              <h4>Sede Flores</h4>
              <p>2325 Av Rivadavia, Buenos Aires, CABA</p>
              <p>CP C8912HGB</p>
              <p>Tel. (011)1782-5278</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.row}>
              <h3>Contactate</h3>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Formulario de contacto</a>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Reporte de Incidentes</a>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Únete a nuestro equipo</a>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Interesado en aprender?</a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.row}>
              <h3>¡Síguenos!</h3>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target='_blank' rel="noreferrer">YouTube</a>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Twitter</a>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.row}>
              <h3>Legales</h3>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Términos y condiciones</a>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Política de privacidad</a>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" rel="noreferrer">Defensa de las y los Consumidores</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LocationContainer({ barrio, calle, horario, image }) {
  if (image == null) {
    image = "locacion1";
  }
  return (
    <div className={styles.containerLocation}>
      <img alt={image} height={200} width={300} src={require('../../../../assets/images/hospital/hospital/' + image + '.png')} />
      <div className={styles.infoLocation}>
        <div className={styles.barrio}>
          {barrio}
        </div>
        <div className={styles.calle}>
          {calle}
        </div>
        <div className={styles.horario}>
          {horario}
        </div>
      </div>
    </div>
  );
}

function Service({ image, telefono, children }) {
  if (image == null) {
    image = "icon1";
  }
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.icon}>
        <img alt={image} height={100} width={100} src={require('../../../../assets/images/hospital/hospital/' + image + '.png')} />
      </div>
      <div className={styles.servicio}>
        {children}
      </div>
      <div className={styles.horario}>
        {telefono}
      </div>
    </div>
  );
}

export default HospitalScreen;
