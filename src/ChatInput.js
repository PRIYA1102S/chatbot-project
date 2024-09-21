import React, { useState } from 'react';
import './ChatInput.css';
import { FaPaperclip } from 'react-icons/fa'; // Importing file icon

const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        onSend(input);
        setInput('');
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null}
                placeholder="Type your message..."
            />
            <button onClick={handleSend} className="send-button">Send</button>
            <button className="file-button">
                <FaPaperclip />
            </button>
        </div>
    );
};

export default ChatInput;
