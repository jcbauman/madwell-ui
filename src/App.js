import './App.css';
import React, {useEffect, useState} from 'react';
import ImageComponent from "./ImageComponent";

function App() {

    const [imageData,setImageData] = useState([])

    const IMAGE_PATH_ENDPOINT = 'https://www.madwell.com/interview/index.php?f=data';

    useEffect(  () => {
        fetch(IMAGE_PATH_ENDPOINT)
            .then(response => response.json())
            .then(response => setImageData(response))
            .catch(error => console.log(error));
    },[]);

    useEffect( () => {
        console.log(imageData);
    },[imageData]);

    return (
        <div className="App">
            <header className='App-header'>
                <h1 className='pageHeader'>Title of Page</h1>
                <h3 className='subHeader'>I'm centered vertically on Desktop, but flush with the right edge of some sort.</h3>
                <div className='imagesBox'>
                    <div className='imageGrid'>
                        {imageData.map((singleImage) =>
                            <ImageComponent path={singleImage.path} caption={singleImage.caption} alt={singleImage.alt}/>
                        )}
                    </div>
                </div>
                <h3 className='bottomFooter'>And finally, I am some text centered along the bottom of the page.</h3>
            </header>
        </div>
    );
}

export default App;
