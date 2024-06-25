import React from 'react';
import themes from './Data/themes.js'; // Importing the themes array
// import '../styles/ProductList.css'
const ThemeList = () => {
  return (
    <div className="product-list">
      {themes.map(theme => (
        <div key={theme.name} className="theme-item">
          <img src={theme.image} alt={theme.name} className="theme-image" />
          <div className="theme-name">{theme.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ThemeList;
