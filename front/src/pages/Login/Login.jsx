import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'

import './Login.scss'
function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://backend-login-gwo4.onrender.com/user/login', credentials);
            toast.success(`Logged in user`);
        } catch (error) {
            toast.error('Password or email is incorrect');
        }
    }

    return (
        <form className='loginForm' onSubmit={handleSubmit}>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" /> <br />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" /> <br />
            <button type="submit">Login</button>
            <Toaster/>
             <Link to={'/register'}>Register</Link>
        </form>
    );
}

export default Login;
