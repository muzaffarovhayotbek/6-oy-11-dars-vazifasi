import React, { useContext, useRef } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import Section from '../components/Section';
import { ThemeContext } from '../App';

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  const nameRef = useRef(null);
  function handleSumbit(e) {
    e.preventDefault();
    console.log(nameRef.current.value);
  }

  function exit(event) {
    confirm('Rostdan ham chiqmoqchimisiz?');
  }
  return (
    <div className="container mx-auto">
      <div className="container flex justify-center">
        <NavLink
          to="/register"
          className="mr-4 text-gray-800 hover:underline hover:-transparent font-semibold transition-colors"
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className="text-gray-800 hover:underline hover:-transparent font-semibold transition-colors"
        >
          Login
        </NavLink>
      </div>
      <div className="flex justify-end hover:underline font-medium">
        <NavLink onClick={exit} to="/register">
          Chiqish
        </NavLink>
      </div>
      <Header></Header>
      <Main></Main>
      <Card></Card>
      <Section></Section>

      <form onSubmit={handleSumbit}>
        <input type="text" ref={nameRef} />
        <button>SAVE</button>
      </form>
      
    </div>
  );
}

export default Home;
