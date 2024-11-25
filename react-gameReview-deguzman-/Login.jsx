import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            onLogin(true);
            setMessage('');
        } else {
            setMessage('Username or password is incorrect, please try again.');
        }
    };

    return (
        <div>
            <h4>Login to Continue:</h4>
            <label>Username:</label>
            <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleUserNameChange}
            />
            <br />
            <label>Password:</label>
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <br />
            {message && <p>{message}</p>}
            <br />
            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
