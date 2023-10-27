import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import styles from './chatbot.module.css';


function ChatBotChat ({visible}){
  const [buttonText,setButtontext] = useState('')
  const [problem, setProblem] = useState('menu')
  const [array, setArray] = useState(['Hola necesito ayuda', 'Envía tu trastorno para comenzar']);
  const messageBoxRef = useRef(null)
  const opacityStyle = {
    opacity: visible ? 1 : 0,

    right: visible ? '3%' : '0%',
    transition: 'all 0.75s',
  }
  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

    function HandleResponse({response}){

      if (response.data.length === 0){
        response.data = [{id:23, location: '', response: 'Tengo otro problema', text: 'Envía otro transtorno para continuar'}]
      }     
      setButtontext(response.data)
    }


    
    
    function OnClicking(data,response) {
      const newArray = [...array];
      newArray.push(response,data); 

      if (response === "Tengo otro problema"){
        setProblem("menu")
        setArray(newArray)
      } else {
        setProblem(problem + "-" + removeAccentsAndLowercase(response))
        setArray(newArray); 
      }
      
    } 

    function removeAccentsAndLowercase(inputString) {
      const normalizedString = inputString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const lowercaseString = normalizedString.toLowerCase();
      return lowercaseString;
    }

    function ResetChatBot(){
      setArray(['Hola', 'Envia tu trastorno para comenzar']);
      setProblem("menu")
    }
    

    useEffect(() => {

      const GetResponse = ()=>{
        axios.get(`https://darthpedro.pythonanywhere.com/chatbot_entry/${problem}`)
        .then(response => {    
            HandleResponse({response})
        })
        .catch(error => {
          console.error('Error fetching available phrase:', error);
        });
      }
      
      GetResponse();

      scrollToBottom()
      if (!visible) {
        const timeoutId = setTimeout(() => {
          ResetChatBot()
        }, 1000);
        return () => clearTimeout(timeoutId);
      }

      

      
      },[problem,visible]);


    return (
      <div className={styles.chatbotmain} style={opacityStyle}>
        <div className={styles.chatbox}>
          <div className={styles.title}>
            <img alt="bot" src={require('../../assets/images/hospital/logo.png')} height={60} width={60} className={styles.botImage} />
            <div className={styles.botinfo}>
              <div className={styles.className}>
                Bot Hater
              </div>

              <div className={styles.statuscontainer}>
                <div className={styles.activecircle} />
                <div className={styles.status}>
                  Online
                </div>
              </div>
              
            </div>
            
            
          </div>
          

          <div className={styles.messagebox} ref={messageBoxRef}>
          {array.map((output, id) => (
            <div
              key={id}
              className={`${styles.messagecontainer} ${id % 2 === 0 ? styles.userMessage : styles.botMessage}`}
            >

              {id % 2 === 1 && (
                <img alt="bot" src={require('../../assets/images/hospital/logo.png')} height={30} width={30} className={styles.botImage} />
              )}
              
              
              <div className={`${styles.messages} ${id % 2 === 0 ? styles.evenMessage : styles.oddMessage}`}>
                
              <div className={styles.sender}>
                {id % 2 === 1 ? 'Bot Hater: ' : 'You: '}
              </div>
              <div className={styles.message}>
                {output}
              </div>
              </div>
              
              {id % 2 === 0 && (
                <img alt="user" src={require('../../assets/images/hospital/user.png')} height={30} width={30} className={styles.userImage}/>
              )}
              
            </div>


          ))}
        </div>
        </div>
  
        <div className={styles.buttons}>
          {buttonText.length > 0 ? (
            buttonText.map((output, id) => (
              <ChatButton key={id} data={output} clickFunction={OnClicking} />
            ))
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
  
  
  
function ChatButton({ data, clickFunction }) {
    return (
      <div >
        <button onClick={() => clickFunction(data.text, data.response)} className={styles.chatbotbutton}>
          {data.response}
        </button>
      </div>
    );
  } 


function ActivateChatBotButton() {
    const [visible,setVisible] = useState(true)
    
    return (
      <div className={styles.ChatBotWrapper}>
        <button onClick={() => setVisible(!visible)} className={styles.ActivateChatBotButton}>
            
        </button>
        <ChatBotChat visible={visible}> 
        </ChatBotChat>
      </div>
    );
  }


export default ActivateChatBotButton
