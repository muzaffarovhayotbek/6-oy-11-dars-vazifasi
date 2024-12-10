import React, { useContext } from 'react';
import mainIcon from '../assets/search.svg';
import './Main.css';

function Main() {
  return (
    <div className="container mx-auto">
      <main className="main">
        <div className="container main__container">
          <div className="main-search">
            <img src={mainIcon} alt="" />
            <input type="text" placeholder="Search for a country…" />
          </div>
          <div className="main-regions">
            <select className="main-select">
              <option>English</option>
              <option>Russian</option>
              <option>Uzbek</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
