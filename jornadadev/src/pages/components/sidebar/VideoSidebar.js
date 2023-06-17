import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes,messages,shares}) {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
        /* a exclamçaõ inverte o valor contrário atribuído inicialmente ao liked */
    }

    return (
        <div className='videoSidebar'>
            <div 
                className='videoSidebar__options'
                onClick={handdleLike}
                /* condição ternária abaixo. forma reduziada do se, se o liked for igual a true,  que é representado pela interrogação (?) o coração ficara cheio, caso (representado pela iconografia :) ocorra um dislike o coração aparecerá vazio */
            >    
                { liked ?  <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}               
                <p> { liked ? likes + 1 : likes } </p>
            </div>
            <div className='videoSidebar__options'>
                <ChatIcon fontSize='large'/>
                <p> {messages} </p>
            </div>
            <div className='videoSidebar__options'>
                <ShareIcon fontSize='large'/>
                <p> {shares} </p>
            </div>
        </div>
    )
}

export default VideoSidebar