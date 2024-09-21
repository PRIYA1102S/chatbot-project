// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Separate CSS for the Sidebar

const Sidebar = ({ messages }) => {
    // Filter messages to get only user inputs
    const userMessages = messages.filter((msg) => msg.sender === 'user');

    return (
        <div className="sidebar">
            <h3>History</h3>
            <ul className="history-list">
                {userMessages.map((msg, index) => (
                    <li key={index} className="history-item">
                        {msg.text.length > 30 ? `${msg.text.substring(0, 30)}...` : msg.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
