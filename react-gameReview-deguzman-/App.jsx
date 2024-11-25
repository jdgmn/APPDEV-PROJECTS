import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';
import Header from './Header';
import Footer from './Footer';
import './index.css'

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    return (
        <>
        <Header />
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Reviews />
            )}
        <Footer />
        </>
    );
}
