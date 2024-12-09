import React, { useState } from 'react';
import { backend } from '../axios';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  function validate() {
    if (username.length < 6) {
      alert('Username eng kamida 6 ta harfdan iborat bo‘lishi kerak');
      return false;
    }

    if (!/^\d+$/.test(password) || password.length < 8) {
      alert(
        'Parol faqat sonlardan iborat bo‘lishi kerak va kamida 8 ta belgidan iborat bo‘lishi kerak'
      );
      return false;
    }

    return true;
  }

  function handleLogin(event) {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }

    const user = {
      username,
      password,
    };

    setLoading(true);

    backend
      .post('auth/signin', user, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('token', response.data.accessToken);
          navigate('/', {state: {token: response.data.accessToken}});
        }
      })
      .catch((error) => {
        if (error == 404 || error.status == 401) {
          alert(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <form className="w-[600px] mx-auto mt-20 flex flex-col gap-4 bg-blue-500 p-5">
        <input
          className="border p-3 rounded-md"
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter username"
        />

        <div className="flex items-center w-full">
          <input
            className="border p-3 rounded-md w-full"
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <span
            className="cursor-pointer ml-2"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? 'Hide' : 'Show'}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="border p-3 rounded-md bg-red-700 text-white"
          disabled={loading}
        >
          {loading ? 'LOADING...' : 'Login'}
        </button>
        <NavLink className='text-center  hover:underline ' to = '/register'>REGISTERGA O'TISH</NavLink>
      </form>
    </div>
  );
}

export default Login;
