import React, { useState } from 'react';
import axios from 'axios';
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
            const response = await axios.post('http://localhost:3020/user/register', userData);
toast.success("Successfly register")            
        } catch (error) {
toast.error('error')        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="surname" value={userData.surname} onChange={handleChange} placeholder="Surname" />
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
            <input type="number" name="age" value={userData.age} onChange={handleChange} placeholder="Age" />
            <button type="submit">Register</button>
            <Toaster />
        </form>

    );
}

export default Register