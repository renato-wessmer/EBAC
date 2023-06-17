import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import "./Video.css"

function Video({likes,messages,shares,name,description,music,url}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

        function handdleStart() {
            if (play) {
                videoRef.current.pause()
                setPlay(false)
            } else {
                videoRef.current.play()
                setPlay(true)
            }
        }

    /* antes do return funcionalidades, depois do return tudo que é visual que aparece na tela */
    return (
        <div className='video'>
            <video
                className='video__player'
                /*liga os controles do vídeo o comando abaixo
                controls*/
                ref={videoRef}
                onClick={handdleStart}
                /*liga looping do vídeo*/
                loop
                src={ url }
            ></video>
            {/* Side bar */}    
            <VideoSidebar 
                likes={ likes }
                messages={ messages }
                shares={ shares }
            />
            {/* Footer */}  
            <VideoFooter
                name={ name }
                description={ description }
                music={ music }
            />
        </div>
    )
}

export default Video