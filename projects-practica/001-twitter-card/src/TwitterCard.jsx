import React, { useState } from 'react'
import './twitterCard.css'

const TwitterCard = ({name, userName}) => {
const [isFollowing, setisFollowing] = useState(false);

const buttonClassName = isFollowing ? 'tw-bttn is-following' : 'tw-bttn'
const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'

const handleButtonClick = () => {
  setisFollowing(!isFollowing)
}


  return (
    <div className='tw-main'>
        <img src={`https://unavatar.io/${userName}`} alt="" className='tw-img'/>
        <div className='tw-txt-container'>
            <p className='tw-name'>{name}</p>
            <p className='tw-userName'>{userName}</p>
        </div>
        <button onClick={handleButtonClick} className={buttonClassName}>{buttonText}</button>
    </div>
  )
}

export default TwitterCard