import { useState } from 'react';
import {Link} from 'react-router-dom';
import React from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import '../Styles/Login.css';
import logo from '../assets/pub_logo.png';
import bg from '../assets/bg.jpg';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook_icon.png';

export const Signup = () => {
    const [ action, setAction] = useState('');

    return (
        <div className={`container ${action}`}>
            <img src={bg} alt="Food" />
            <div className='form-container'>
                <div className='logo'>
                    <img src={logo} alt="georges' pub" />
                </div>
                <h1>Sign up</h1>
                <div className='input-box'>
                    <FaUserAlt className='icon' />
                    <input type='text' placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <FaEnvelope className='icon' />
                    <input type='email' placeholder='Email' required />
                </div>
                <div className='input-box'>
                    <FaLock className='icon' />
                    <input type='password' placeholder='Password' required />
                </div>
                <div className='conditions'>
                    <label><input type='checkbox' />I agree to the terms & conditions</label>
                </div>
                <button className='button' type='submit'>Sign up</button>
                <div className='register-link'>
                    <p>Already have an account? <Link to='/Login'>Login</Link></p>
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
