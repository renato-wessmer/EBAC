import React, { useRef, useState } from 'react'
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
                src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
            >

            </video>
        </div>
    )
}

export default Video