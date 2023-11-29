import React from 'react';

import './Avatar.css';

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image ? props.image : 'https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png'}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
