import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
    // Simulate a response from a chatbot
    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: 'This is a bot reply. Your message was: ' + inputValue,
        sender: 'bot',
      };
      setMessages([...messages, botReply]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-80 bg-black text-white">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-2 rounded-lg ${
              message.sender === 'user' ? 'bg-gray-900 text-white self-end' : 'bg-gray-700 text-white self-start'
            }`}
          >
            {message.text}
          </motion.div>
        ))}
      </div>
      <div className="p-4 flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 bg-gray-900 text-white rounded-lg py-2 px-4 mr-2 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
