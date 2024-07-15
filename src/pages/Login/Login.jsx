import React, { useEffect, useState } from 'react';
import './Login.css';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import logo from '../../images/google.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      navigate('/book');
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div id="login-container">
      <div id="login-box">
        <p id="login-text">Login process made easier and secure</p>
        <img className="logo" onClick={handleClick} src={logo} alt="Google Logo"/>
        <p className='para'>Sign in with Google</p>
      </div>
    </div>
  );
}

export default About;
