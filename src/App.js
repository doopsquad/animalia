import React from 'react';
import AnimalEntry from './animalEntry';

function App() {
  return (
    <div className="App">
      <AnimalEntry 
      img="https://www.thoughtco.com/thmb/q4t3OQkJIwiyTHnV4Pve34f4Ygo%3D/2250x1500/filters:fill(auto%2C1)/167003501-56a0089e5f9b58eba4ae8f93.jpg" 
      video="https://doopsquad.github.io/React-app/asianElephant.mp4" 
      title="Asian Elephant" 
      info="placeholder"
      />
      <AnimalEntry img="https://th.bing.com/th/id/OIP.QXsSUKQ03SoTVPVE32zxRgHaE5?rs=1&pid=ImgDetMain" video="https://doopsquad.github.io/React-app/baldEagle.mp4" title="Bald Eagle" info="placeholder"/> 
      <AnimalEntry img="https://th.bing.com/th/id/R.db6acb92804f7d7e0a645ca7d3dddbc2?rik=zOVzXpWAq6HNHg&riu=http%3a%2f%2fanimalsadda.com%2fwp-content%2fuploads%2f2013%2f11%2fBasking-Shark-3.jpg&ehk=UJTo17LUZLuEINcA23wi7Qrfn%2bEv%2bDC9NpghytAD33U%3d&risl=&pid=ImgRaw&r=0" video="https://doopsquad.github.io/React-app/baskingShark.mp4" title="Basking Shark" info="placeholder"/> 
      <AnimalEntry img="https://th.bing.com/th/id/OIP.-12S-2iyoQ5xBbluxNwptgHaLG?rs=1&pid=ImgDetMain" video="https://doopsquad.github.io/React-app/dove.mp4" title="Mourning Dove" info="placeholder"/> 
      <AnimalEntry img="https://fthmb.tqn.com/D9LmnHYOLdxXB4OHyJx-_-OkwpI=/4724x2657/filters:fill(auto,1)/GettyImages-634869043-58a6e83f5f9b58a3c918ca12.jpg" video="https://doopsquad.github.io/React-app/macaw.mp4" title="Macaw" info="placeholder"/> 
      <AnimalEntry img="https://th.bing.com/th/id/R.022d39c76bd82929785a72775473aa12?rik=7YBgY%2bKIZryrXg&pid=ImgRaw&r=0" video="https://doopsquad.github.io/React-app/mantaRay.mp4" title="Manta Ray" info="placeholder"/> 
      <AnimalEntry img="https://www.thoughtco.com/thmb/o3_yk19FVHEzfbNlIroah5ZqZjs=/4632x3088/filters:no_upscale():max_bytes(150000):strip_icc()/whale-shark-514475851-e56169bf49fb41a49f3b30068f806789.jpg" video="https://doopsquad.github.io/React-app/whaleShark.mp4" title="Whale Shark" info="placeholder"/> 
      <AnimalEntry img="https://th.bing.com/th/id/OIP.Kw6EzySU7iAc6sue1y0DKgHaEK?rs=1&pid=ImgDetMain" video="https://doopsquad.github.io/React-app/whiteRhino.mp4" title="White Rhino" info="placeholder"/> 
    </div>
  );
}

export default App;
