import React from 'react';
import germany from '../assets/germany.jpg';
import './Card.css';
import usa from '../assets/usa.jpg';
import brazil from '../assets/brazil.jpg';
import Iceland from '../assets/Iceland.jpg';

function Card() {
  return (
    <div className="card">
      <div className="container card__container">
        <div className="card-first">
          <img src={germany} alt="" width={267} height={160} />
          <h2>Germany</h2>
          <div className="card-first-titles">
            <h3 className="population">
              Population: <span>81,770,900</span>
            </h3>
            <h4 className="region">
              Region: <span>Europe</span>
            </h4>
            <h6 className="capital">
              Capital: <span>Berlin</span>
            </h6>
          </div>
        </div>
        <div className="card-two">
          <img src={usa} alt="" width={264} />
          <h2>United States of America</h2>
          <div className="usa-titles">
            <h3 className="usa-titles-population">
              Population: <span>323,947,000</span>
            </h3>
            <h4 className="usa-titles-region">
              Region <span>Americas</span>
            </h4>
            <h6 className="usa-titles-capital">
              Capital: <span>Capital: Washington, D.C.</span>
            </h6>
          </div>
        </div>
        <div className="card-three">
          <img src={brazil} alt="" />
          <h2>Brazil</h2>
          <div className="brazil-title">
            <h3 className="brazil-population">
              Population: <span>206,135,893</span>
            </h3>
            <h4 className="brazil-title-region">
              Region <span>Americas</span>
            </h4>
            <h5 className="brazil-capital">
              Capital: <span> Brasília</span>
            </h5>
          </div>
        </div>
        <div className="card-four">
          <img src={Iceland} alt="" width={264} />
          <h2>Iceland</h2>
          <div className="iceland-title">
            <h3 className="iceland-population">
              Population: <span>334,300</span>
            </h3>
            <h4 className="iceland-region">
              Region: <span>Europe</span>
            </h4>
            <h6 className="iceland-capital">
              Capital: <span>Reykjavík</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
