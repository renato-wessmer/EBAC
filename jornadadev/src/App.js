import React, { useEffect, useState } from 'react';
import './App.css'
import Video from './pages/Video'
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [video, setVideos] = useState([])

  async function getVideos (){
    const videosCollection = collection(db, "videos")
    // firebase acessa o banco de dados e acessa a collection videos

    const videosSnapshot = await getDocs(videosCollection)
    // firebase após acessar a collection traz os dados da collection videos daquele momento

    const videosList = videosSnapshot.docs.map(doc => doc.data())
    // Ve todas as informações da lista de videos

    setVideos(videosList)
  }

  useEffect(()=>{
    getVideos();
  }, [])

  // o (, []) diz ao useEffect que independente do que aconteça, atualização ou mudanças e etc, ele não deve reiniciar, dessa forma se interrompe o looping que existiria caso se retire o (, [])

  return (
    <div className="App">
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

        {/* <Video 
          likes={444}
          messages={555}
          shares={666}
          name="Renato futuro aluno EBAC"
          description="Lula - Naruto Shippuden"
          music="ブルーバード - Bluebird"
          url="https://firebasestorage.googleapis.com/v0/b/tiktok-ebac-46cbd.appspot.com/o/Segundo_video_projeto_EBAC.mp4?alt=media&token=4e4d64c0-94d4-4965-a7c3-8ca9afe3c1d2"
        />
        <Video        
          likes={777}
          messages={888}
          shares={999}
          name="Paulo"
          description="Bracker o goleiro"
          music="Musica épica"
        />
        <Video           
          likes={1010}
          messages={1111}
          shares={1212}
          name="Paulo"
          description="Bracker o goleiro"
          music="Musica épica"
        /> */}
      </div>
    </div>
  );
}

export default App;
