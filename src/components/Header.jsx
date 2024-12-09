import React from 'react';
import './Header.css';
import headerIcon from '../assets/header-dark.svg';

function Header() {
  return (
    <div className='container mx-auto'>
      <header className="header">
        <div className="container header__container">
          <h2 className="header-title">Where in the world?</h2>
          <div className="header-dark-mores">
            <img src={headerIcon} alt="Dark mode icon" />
            <h3 className="header-dark-more">Dark Mode</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
