import React, { useEffect, useState } from 'react';
import './App.css'
import Video from './pages/Video'
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  async function getVideos (){
    const videosCollection = collection(db, "videos") // o nome aqui deve ser igual ao dado dentro do firebase
    // firebase acessa o banco de dados e acessa a collection videos

    const videosSnapshot = await getDocs(videosCollection)
    // firebase após acessar a collection traz os dados da collection videos daquele momento

    const videosList = videosSnapshot.docs.map((doc) => doc.data())
    // Ve todas as informações da lista de videos

    setVideos(videosList)
  }

  useEffect(()=>{
    getVideos();
  }, [])

  // o (, []) diz ao useEffect que independente do que aconteça, atualização ou mudanças e etc, ele não deve reiniciar, dessa forma se interrompe o looping que existiria caso se retire o (, [])

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className='app__videos'>

        {video.map((intem)=>{
          return(
            <Video           
              likes={intem.likes} //O nome do item deve ser igual ao que se encontra dentro do banco de dados
              messages={intem.messages}
              shares={intem.shares}
              name={intem.name}
              description={intem.description}
              music={intem.music}
              url={intem.url}
            />  
          );
        }) }  
      
      </div>
    </div>
  );
}

export default App;
