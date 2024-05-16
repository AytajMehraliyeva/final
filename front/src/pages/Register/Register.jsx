import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Register.scss'
import toast, { Toaster } from 'react-hot-toast';
import './Register'

function Register() {
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        age: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://backend-login-gwo4.onrender.com/user/register', userData);
toast.success(`${userData.name} successfly register`)            
        } catch (error) {
toast.error('error')        }
    }

    return (<>
        <form className='registerForm' onSubmit={handleSubmit}>
            <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" /> <br />
            <input type="text" name="surname" value={userData.surname} onChange={handleChange} placeholder="Surname" /> <br />
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" /> <br />
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" /> <br />
            <input type="number" name="age" value={userData.age} onChange={handleChange} placeholder="Age" /> <br />
            <button type="submit">Register</button> <br />
                <Toaster />
            <Link to={'/login'}>Do you have your account?</Link>
         

        </form>\
        </>

    );
}

export default Register