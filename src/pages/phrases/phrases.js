import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./phrases.module.css"; // Import the CSS module
import HospitalHeader from "../../components/commonElements/hospitalHeader/HospitalHeader";
import CustomCursor from "../../components/commonElements/customCursor/customcursor";

function Phrases() {
  const [phrase, setPhrase] = useState("");
  const date1 = new Date(2023, 9, 17);
  const curdate = Date.now();
  let day = Math.floor((curdate - date1) / (1000 * 60 * 60 * 24));

  function GetPhrase() {
    axios
      .get(`https://darthpedro.pythonanywhere.com/valid-phrase/${day}`)
      .then((response) => {
        setPhrase(response.data.text);
      })
      .catch((error) => {
        console.error("Error fetching available phrase:", error);
      });
  }

  useEffect(() => {
    GetPhrase();
  }, []); // Include an empty dependency array to run the effect only once

  return (
    <div className={styles.phrases}>
      <div className={styles.containerphrases}>
        <HospitalHeader isScrollLocked={true} main_value="frases"></HospitalHeader>
        <h1 className={styles.h1}>{phrase}</h1>
        <Timer />
        <CustomCursor />
        <button className={styles.button}>
          <Link to="/main">Volver</Link>
        </button>
      </div>
    </div>
  );
}

function Timer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let hours = 24 - time.getHours();
  let minutes = 60 - time.getMinutes();
  let seconds = 60 - time.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }
  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  if (hours < 10) {
    hours = "0" + hours.toString();
  }

  return <div className={styles.timer}>{hours + ":" + minutes + ":" + seconds}</div>;
}

export default Phrases;
