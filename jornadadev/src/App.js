import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="Renato futuro bolsista EBAC"
          description="Metallica - Pokémon Theme"
          music="Gotta catch"
          url="https://firebasestorage.googleapis.com/v0/b/tiktok-ebac-46cbd.appspot.com/o/Primeiro_video_projeto_EBAC.mp4?alt=media&token=df1d7f74-0820-49cf-95a9-26deeed554fb"
        />
        <Video 
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
        />
      </div>
    </div>
  );
}

export default App;
