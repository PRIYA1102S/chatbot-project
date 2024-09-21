import React from 'react';
import './Chatbot.css';
import Footer from './Footer';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div className="welcome-screen">
            <img src="/logo.png" alt="Logo" className="welcome" />
            <h1 className="welcome-message">Welcome to Our Chatbot!</h1>
            <p className="description">Your friendly assistant is here to help you.</p>
            <button onClick={onStart} className="start-button">Start Chat</button>
            <Footer />
        </div>
    );
};

export default WelcomeScreen;
