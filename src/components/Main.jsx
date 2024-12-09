import React from 'react';
import mainIcon from '../assets/search.svg';
import './Main.css';

function Main() {
  return (
    <div className='container mx-auto'>
      <main className="main">
        <div className="container main__container">
          <div className="main-search">
            <img src={mainIcon} alt="" />
            <input type="text" placeholder="Search for a country…" />
          </div>
          <div className="main-regions">
            <select className="main-select">
              <option>Filter by Region</option>
              <option>Germany</option>
              <option>United States of America</option>
              <option>Brazil</option>
              <option>Iceland</option>
              <option>Afghanistan</option>
              <option>Åland Islands</option>
              <option>Albania</option>
              <option>Algeria</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
