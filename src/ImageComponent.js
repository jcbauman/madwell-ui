import React from 'react';
import './css/imageComponent.css';

export default function ImageComponent(props){
    const {path, alt, caption} = props;
    return(
        <div className='imageContainer'>
            {caption ? <div>
                    <div className='captionScrum'/>
                    <p className='caption'>{caption}</p>
                </div>
                : ''}
            <img className='imageScaling' src={path} alt={alt}/>
        </div>
    )
}