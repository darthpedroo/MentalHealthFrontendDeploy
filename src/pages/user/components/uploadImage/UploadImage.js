import React, { useState , useEffect} from 'react';
import axios from 'axios';


import uploadStyle from './UploadImage.module.css'


const UploadImage = ({data, imageType, closeFunction}) => {


  
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedBanner, setSelectedBanner ] = useState('')
  const [bannerLoaded, setBannerLoaded] = useState(false)
  const [pictureLoaded, setPitctureLoaded] = useState(false)
  const [gotResponse, setGotResponse] = useState(false)
 

  useEffect(()=>{
    
    if(data){
      axios
      .get(`https://darthpedro.pythonanywhere.com/images/${data}/`)
      .then((response) => {
        if (response.data.picture !== null){
          setPitctureLoaded(true)
        }
        if (response.data.banner !== null){
          setBannerLoaded(true)
        }
        setGotResponse(true)
      })
      .catch((err)=>{
        setGotResponse(true)
        console.error("Error getting the image: ", err)
      })
    }
    
  },[data, bannerLoaded,pictureLoaded, gotResponse])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0]
    if(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setSelectedBanner(reader.result);
      }
      
    }

  }

  
  const handleImageSubmit = () => {

    closeFunction()

   
    if (bannerLoaded === false && pictureLoaded === false) {
   
      axios
        .post('https://darthpedro.pythonanywhere.com/add/images/', {
          picture: selectedImage,
          banner: selectedBanner,
          idUser: data
        })
        .then((response) => {
          console.log('Profile picture and banner upload successful:', response.data);
          window.location.reload()
        })
        .catch((error) => {
          console.error('Profile picture and banner upload failed:', error);

        });
    }

       else if (selectedImage) {
  
        axios
          .put(`https://darthpedro.pythonanywhere.com/modify/images/${data}/`, {
            picture: selectedImage,
            idUser: data
          })
          .then((response) => {
            console.log('Profile picture update successful:', response);
            window.location.reload()
          })
          .catch((error) => {
            console.error('Profile picture update failed:', error);
            // Handle error for profile picture update
          });
      } else if (selectedBanner) {
        axios
          .put(`https://darthpedro.pythonanywhere.com/modify/images/${data}/`, {
            banner: selectedBanner,
            idUser: data
          })
          .then((response) => {
            console.log('Banner update successful:', response);
            window.location.reload()
            // Handle success for banner update
          })
          .catch((error) => {
            console.error('Banner update failed:', error);
            // Handle error for banner update
          });
      }
    };

  useEffect(() => {
    const image_input = document.getElementsByClassName(uploadStyle[imageType + "_input"])[0]
    image_input.click()

    const body = document.querySelector("body")
    body.classList = "overflow-disabled"
  }, [imageType])


  const changePicture = () => {
    const picture_input = document.getElementsByClassName(uploadStyle.picture_input)[0]
    picture_input.click()
  }

  const changeBanner = () => {
    const banner_input = document.getElementsByClassName(uploadStyle.banner_input)[0];
    banner_input.click()
  }

  return (


    <div className={uploadStyle.container}>
      

      <div className={`${uploadStyle.input_section} ${uploadStyle[imageType]}`}>


        {/* parameter 'imageType' can be "banner" or "picture" */}
    
        
          <div className={`${uploadStyle.input_container} ${uploadStyle.picture_container}`}>

            <div className={uploadStyle.top_container}>
              <div className={uploadStyle.title_container}>
                <h1 className={uploadStyle.input_title}>Nueva imagen de perfil</h1>
              </div>

              <div className={uploadStyle.cross_container}>
                <img onClick={() => {closeFunction()}} src={require("../../../../assets/images/profile/cross_icon.png")} alt="Close Icon" className={uploadStyle.cross} />
              </div>
              
            </div>

            <hr className={uploadStyle.line_separator} />

            <div className={uploadStyle.image_container}>
            {selectedImage ? <img src={selectedImage} alt='' className={uploadStyle.image} /> : null}
            </div>
      
            <div className={uploadStyle.buttons_container}>

              <button onClick={changePicture} className={`${uploadStyle.change_button} ${uploadStyle.button}`}>Cambiar imagen de perfil
                <input
                type="file"
                name="image_url"
                accept="image/jpeg,image/png,image/gif"
                onChange={(e) => {
                  handleImageChange(e);
                }}
                className={uploadStyle.picture_input}
                />
              </button>
              
              <button onClick={handleImageSubmit} disabled={!gotResponse} className={`${uploadStyle.upload_button} ${uploadStyle.button} ${gotResponse ? uploadStyle.greenBackground : uploadStyle.grayBackground}`}>Confirmar nueva imagen</button>

            </div>
      
          </div>






          <div className={`${uploadStyle.input_container} ${uploadStyle.banner_container}`}>

            <div className={uploadStyle.top_container}>
              <div className={uploadStyle.title_container}>
                <h1 className={uploadStyle.input_title}>Nueva imagen de banner</h1>
              </div>

              <div className={uploadStyle.cross_container}>
                <img onClick={() => {closeFunction()}} src={require("../../../../assets/images/profile/cross_icon.png")} alt="Close Icon" className={uploadStyle.cross} />
              </div>
              
            </div>

            <hr className={uploadStyle.line_separator} />

            <div className={uploadStyle.image_container}>
            {selectedBanner ? <img src={selectedBanner} alt='' className={uploadStyle.image} /> : null }
            </div>
      
            <div className={uploadStyle.buttons_container}>

              <button onClick={changeBanner} className={`${uploadStyle.change_button} ${uploadStyle.button}`} style={{}}> Cambiar imagen del banner
                <input type="file"
                name="image_url"
                accept="image/jpeg,image/png,image/gif"
                onChange={(e) => {
                  handleBannerChange(e);
                }}
                className={uploadStyle.banner_input}></input>
              </button>
              
              <button onClick={handleImageSubmit} disabled={!gotResponse} className={`${uploadStyle.upload_button} ${uploadStyle.button} ${gotResponse ? uploadStyle.greenBackground : uploadStyle.grayBackground}`}>Confirmar nueva imagen</button>

            </div>
      
          </div>

      </div>
      
    </div>
  );
};

export default UploadImage;
