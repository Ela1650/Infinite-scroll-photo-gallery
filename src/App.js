import React, { useState, useEffect} from "react";
import Heading from './components/Heading';
import Loader from './components/Loader';
import UnsplashImage from './components/UnsplashImage';
import './app.css';

import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then(res =>{ 
        console.log(res.data);
         setImages([...images,...res.data]);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <Heading/>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="wrapper-image">
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} alt={image.alt_description} photographer={image.user.first_name}/>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
