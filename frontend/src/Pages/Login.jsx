import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export const Login = () => {
return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUserAlt />
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required />
                <FaLock />
            </div>
            <div className='remember-forgot'>
                <label htmlFor=''><input type='checkbox'/>Remember me</label>
                <a href='#'>Forgot password</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>Don't have an account?<a href='#'>Register</a></p>
            </div>
        </form>
    </div>
)
}
