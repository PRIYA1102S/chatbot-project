import React, { useState } from 'react';
import './ChatBotStyles.css';
import WelcomeScreen from './WelcomeScreen';
import ChatInput from './ChatInput';
import Sidebar from './Sidebar';
import { handleChatQuery } from './services/ChatService';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [isChatActive, setChatActive] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [input, setInput] = useState('');

    // const handleSendMessage = async () => {
    //     const response = await fetch('http://127.0.0.1:5011/search', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ text: input }),
    //     });
    //     const data = await response.json();
    //     const conversation = {
    //         id: Date.now(),
    //         role: 'user',
    //         message: input,
    //     };
    //     // setConversations([...conversations, conversation]);
    //     const botResponse = {
    //         id: Date.now(),
    //         role: 'bot',
    //         message: data.response,
    //     };
    //     // setConversations([...conversations, botResponse]);
    //     setInput('');
    //     return (botResponse)
    // };

    const handleSend = async (input) => {
        if (input.trim()) {
            const userMessage = input;
            const botResponse = handleChatQuery(input).then(res => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'user', text: userMessage },
                    { sender: 'bot', text: res }
                ]);
            })
            .catch(err => {
                console.log(err);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'user', text: userMessage },
                    { sender: 'bot', text: "ERROR" }
                ]);
            })

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
                                src="logo.png"
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
