import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import '../Styles/Signup.css';
import logo from '../assets/pub_logo.png';
import bg from '../assets/bg.jpg';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook_icon.png';
import { useUser } from '../components/UserContext'


export const Signup = () => {
    const { setUsername } = useUser();
    const [username, setUsernameInput] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }

        if (!termsAccepted) {
            setError('Please accept the terms & conditions');
            return;
        }

        setError('');
        setUsername(username);
        navigate('/Admin');
    };

    return (
        <div className='container'>
            <img src={bg} alt="Food" />
            <div className='form-container'>
                <div className='logo'>
                    <img src={logo} alt="George's Pub" />
                </div>
                <h1>Sign up</h1>
                {error && <p className="error-message">{error}</p>}
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
                        <FaEnvelope className='icon' />
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <div className='conditions'>
                        <label>
                            <input
                                type='checkbox'
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                required
                            /> I agree to the terms & conditions
                        </label>
                    </div>
                    <button className='button' type='submit'>Sign up</button>
                </form>
                <div className='register-link'>
                    <p>Already have an account? <Link to='/Login'>Login</Link></p>
                </div>
                <div className='social_icons'>
                    <a href='/' className='social'><img src={google} alt='Google' /></a>
                    <a href='/' className='social'><img src={apple} alt='Apple' /></a>
                    <a href='/' className='social'><img src={facebook} alt='Facebook' /></a>
                </div>
            </div>
        </div>
    );
};
