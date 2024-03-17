import React from 'react';
import "./Style.css";

function AnimalEntry({img, video, title, info}) {


  
  function ButtonClicked() {
      
  }

  return (
    <div>
        <h1 id="title">{title}</h1>
        <img id="img"
        src={img}
        width="320" 
        height="240" 
        />
        <video id="video" controls
        source src={video} type="video/mp4"
        width="320" 
        height="240" 
        autoplay="" 
        loop="" 
        />
        <br />
        <button id="btn" onClick={ButtonClicked}>Learn More?</button>
        <p id="info">{info}</p>
    </div>
  )
}

export default AnimalEntry;
