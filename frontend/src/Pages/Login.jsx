import React, { useState } from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import '../Styles/Login.css';
import logo from '../assets/pub_logo.png';
import bg from '../assets/bg.jpg';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext'

export const Login = () => {
    const { setUsername } = useUser();
    const [username, setUsernameInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        if (username === 'user' && password === 'password') {
            setError('');
            setUsername(username);
            navigate('/Admin');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='container'>
            <img src={bg} alt="Food" />
            <div className='form-container'>
                <div className='logo'>
                    <img src={logo} alt="georges' pub" />
                </div>
                <h1>Log in</h1>
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <FaUserAlt className='icon' />
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <FaLock className='icon' />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox' /> Remember me
                        </label>
                        <Link to='/forgot-password'>Forgot password?</Link>
                    </div>
                    <button className='button' type='submit'>Login</button>
                </form>
                <div className='register-link'>
                    <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                </div>
                <div className='social_icons'>
                    <a href='/' className='social'><img src={google} alt='google' /></a>
                    <a href='/' className='social'><img src={apple} alt='apple' /></a>
                    <a href='/' className='social'><img src={facebook} alt='fb' /></a>
                </div>
            </div>
        </div>
    );
};
