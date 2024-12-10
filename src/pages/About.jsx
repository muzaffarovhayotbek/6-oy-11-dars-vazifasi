import React, { useContext } from 'react';
import { LanguageContext } from '../App';

function About() {
  const { lng, setLang } = useContext(LanguageContext);
  console.log(5, );

  return <div>
    about
  </div>;
}

export default About;
