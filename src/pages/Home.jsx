import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import Section from '../components/Section';

function Home() {
  return (
    <div className='container mx-auto'>
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
      <Header></Header>
      <Main></Main>
      <Card></Card>
      <Section></Section>
    </div>
  );
}

export default Home;
