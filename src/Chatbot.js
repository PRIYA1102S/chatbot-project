// Chatbot.js
import React, { useState } from 'react';
import './ChatBotStyles.css'; // Chatbot-specific styles
import WelcomeScreen from './WelcomeScreen';
import ChatInput from './ChatInput';
import Sidebar from './Sidebar'; // Import Sidebar component

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [isChatActive, setChatActive] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        // Call API endpoint to send message and get response
        const response = await fetch('http://127.0.0.1:5011/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: input }),
        });
        const data = await response.json();
        const conversation = {
            id: Date.now(),
            role: 'user',
            message: input,
        };
        setConversations([...conversations, conversation]);
        const botResponse = {
            id: Date.now(),
            role: 'bot',
            message: data.response,
        };
        setConversations([...conversations, botResponse]);
        setInput('');
        return (botResponse)
    };

    const hardcodedResponses = {
        "hii": "Hii!",
        'hi': 'hi',
        "hello": "Hello!",
        "what is your name?": "I'm a chatbot created with React!",
        "how are you?": "I'm just a bunch of code, but I'm doing great! How about you?",
        "help": "Sure! What do you need help with?",
        "thank you": "Thank You! See you next time!",
        "bye": "Goodbye! Have a great day!"
    };

    const handleSend = (input) => {
        if (input.trim()) {
            const userMessage = input;
            const botResponse = hardcodedResponses[userMessage.toLowerCase()] || handleSendMessage();
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'user', text: userMessage },
                { sender: 'bot', text: botResponse }
            ]);
        }
    };

    return (
        <div className="chatbot">
            {isChatActive ? (
                <div className="chat-container">
                    <Sidebar messages={messages} />
                    <div className="chat-window">
                        <header className="chat-header">
                            <img
                                src="logo.png" // Replace with your logo's path
                                alt="Chatbot Logo"
                                className="chat-logo"
                            />
                            <h2 className="chat-title">ChatBot</h2>
                        </header>
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <ChatInput onSend={handleSend} />
                    </div>
                </div>
            ) : (
                <WelcomeScreen onStart={() => setChatActive(true)} />
            )}
        </div>
    );
};

export default Chatbot;
