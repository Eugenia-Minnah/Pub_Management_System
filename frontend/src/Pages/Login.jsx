import React from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import '../Styles/Login.css';
import logo from '../assets/pub_logo.png';
import bg from '../assets/bg.jpg';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook_icon.png';

export const Login = () => {
    return (
        <div className='container'>
            <img src={bg} alt="Food" />
            <div className='form-container'>
                <div className='logo'>
                    <img src={logo} alt="georges' pub" />
                </div>
                <h1>Log in</h1>
                <div className='input-box'>
                    <FaUserAlt className='icon' />
                    <input type='text' placeholder='Email' required />
                </div>
                <div className='input-box'>
                    <FaLock className='icon' />
                    <input type='password' placeholder='Password' required />
                </div>
                <button className='button' type='submit'>Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href='/'>Sign up</a></p>
                </div>
                <div className='social_icons'>
                <a href='/' className='social'><img src={google} alt='google'/></a>
                <a href='/' className='social'><img src={apple} alt='apple'/></a>
                <a href='/' className='social'><img src={facebook} alt='fb'/></a>
                </div>
            </div>
        </div>
    );
};
