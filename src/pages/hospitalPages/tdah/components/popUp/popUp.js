//import ReactModal from 'react-modal';

import React, { useState, useEffect } from 'react';

function PopUp() {


    const [allPopups, setAllPopups] = useState([])
    
    
    function RandomPopup(){
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        
        if (randomNumber === 1) {
            const gifsArray = ["familyguy1","minecraft1","minecraft2","subwaysurferos","minecraft3","minecraft4","familyguy2","familyguy3","familyguy4","familyguy5"];
            const newArray = [...allPopups];
            let randomPosx = Math.floor(Math.random() * window.innerWidth) -  (16 * window.innerWidth) / 100;
            let randomPosy = Math.floor(Math.random() * window.innerHeight) -  (22 * window.innerHeight) / 100;
            if (randomPosx < 0){
                randomPosx = 0
            };
            if (randomPosy < 0){
                randomPosy = 0
            };

            let newPopup = {
                image: require('../../../../../assets/images/hospital/tdah/' + gifsArray[Math.floor(Math.random() * gifsArray.length)] + '.gif'),
                paddingLeft: randomPosx, 
                paddingTop: randomPosy 
            };
        newArray.push(newPopup);
        setAllPopups(newArray);
        
     }
     
    }

    function onClickPopup(id){
        const newArray = allPopups.filter((_, index) => index !== id);
        setAllPopups(newArray);

    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            RandomPopup();
          }, 1000);
          return () => {
            clearInterval(intervalId);
          };
    },[allPopups])

    return (
    <div className='tdah-popup-box'>
        {allPopups.map ((output,id) => 
            <div className='tdah-popup' key={id} style={{left: output.paddingLeft, top: output.paddingTop}}>
                <div className='tdah-popup-inner' >
                    <img onClick={() => onClickPopup(id)} className='gif' src={output.image} alt=''></img>
                </div>
            </div>
            )
        }
    </div>
    );
}

export default PopUp