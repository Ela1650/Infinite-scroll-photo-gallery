import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCamera } from '@fortawesome/free-solid-svg-icons'; 
import '../app.css';

const UnsplashImage = ({url, key, alt, photographer}) => {
  return (
    <div className='image-container'>
       <img className='unsplash-image' src={url} key={key} alt={alt} />
       <p>
        <FontAwesomeIcon icon={faCamera} /> {photographer} 
      </p>
    </div>
  )
}

export default UnsplashImage
