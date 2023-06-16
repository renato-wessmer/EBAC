import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import "./Video.css"

function Video() {

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
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
            ></video>
            {/* Side bar */}    

            {/* Footer */}  
            <VideoFooter />
        </div>
    )
}

export default Video