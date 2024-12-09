import React, { useState } from 'react';
import { backend } from '../axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const navigate = useNavigate();

  function validate() {
    if (username.length < 6) {
      alert('Username eng kamida 6 ta harfdan iborat bo‘lishi kerak');
      return false;
    }

    if (email.length < 6 || !email.endsWith('@gmail.com')) {
      alert(
        'Email eng kamida 6 ta harfli bo‘lishi va oxiri @gmail.com bilan tugashi kerak'
      );
      return false;
    }

    if (!/^\d+$/.test(password) || password.length < 8) {
      alert(
        'Parol faqat sonlardan iborat va kamida 8 ta belgidan iborat bo‘lishi kerak'
      );
      return false;
    }

    if (password !== rePassword) {
      alert('Parollar mos kelmadi!');
      return false;
    }

    return true;
  }

  function handleRegister(e) {
    e.preventDefault();

    if (!validate()) return;

    const user = {
      username,
      email,
      password,
    };

    setLoading(true);

    backend
      .post('auth/signup', user, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert('Ro‘yxatdan o‘tish muvaffaqiyatli!');
          navigate('/login');
        }
      })
      .catch((error) => {
        const message =
          error.response?.data?.message || 'Server bilan muammo mavjud';
        alert(message);
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
        <input
          className="border p-3 rounded-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <div className="flex items-center w-full">
          <input
            className="border p-3 rounded-md w-[900px]"
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

        <div className="flex items-center w-full">
          <input
            className="border p-3 rounded-md w-full"
            type={showRePassword ? 'text' : 'password'}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Enter Repassword"
          />
          <span
            className="cursor-pointer ml-2"
            onClick={() => {
              setShowRePassword(!showRePassword);
            }}
          >
            {showRePassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <button
          onClick={handleRegister}
          className="border p-3 rounded-md bg-red-700 text-white"
          disabled={loading}
        >
          {loading ? 'LOADING...' : 'REGISTER'}
        </button>

        <Link to="/login" className="text-white text-center mt-3">
          LOGINGA O'TISH
        </Link>
      </form>
    </div>
  );
}

export default Register;
