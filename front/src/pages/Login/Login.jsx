import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
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
            toast.success('Logged in user:');
        } catch (error) {
            toast.error('Password or email is incorrect');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Login</button>
            <Toaster/>
        </form>
    );
}

export default Login;
