import React from 'react';
import '../../styles/background.css';

const Background = ({ src, type, children }) => {
  return (
    <div className="background-media">
      {type === 'video' ? (
        <video autoPlay loop muted className="background-video">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={src} alt="Background" className="background-image" />
      )}
      {children}
    </div>
  );
}


export default Background