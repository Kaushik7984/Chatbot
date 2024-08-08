import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import InputField from './InputField';
import Suggestions from './Suggetions';
import '../styles/ChatWindow.scss';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (text) => {
    const userMessage = { text, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setTimeout(() => {
      let botResponse = '';

      const normalizedText = text.toLowerCase().trim();

      if (normalizedText.includes('hello') || normalizedText.includes('hi')) {
        botResponse = 'Hello! How can I assist you today?';
      } else if (normalizedText.includes('help')) {
        botResponse = 'Sure, I can help! What do you need assistance with?';
      } else if (normalizedText.includes('bye')) {
        botResponse = 'Goodbye! Have a great day!';
      } else if (normalizedText.includes('services')) {
        botResponse = 'We offer various services including web development, design, and marketing. What specifically are you interested in?';
      } else if (normalizedText.includes('web development')) {
        botResponse = 'Our web development services include building custom websites, e-commerce solutions, and web applications.';
      } else if (normalizedText.includes('design')) {
        botResponse = 'We offer graphic design services, including branding, UI/UX design, and marketing materials.';
      } else if (normalizedText.includes('marketing')) {
        botResponse = 'Our marketing services include digital marketing, SEO, and social media management.';
      } else if (normalizedText.includes('pricing')) {
        botResponse = 'Please visit our website or contact us for detailed pricing information.';
      } else if (normalizedText.includes('contact')) {
        botResponse = 'You can contact us via email at support@example.com or call us at (123) 456-7890.';
      } else if (normalizedText.includes('thank you')) {
        botResponse = 'You’re welcome! If you have any other questions, feel free to ask.';
      } else {
        botResponse = "I'm sorry, I didn't quite understand that. Could you please rephrase?";
      }

      const botMessage = {
        text: botResponse,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h1>ChatBot</h1>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <Suggestions onSuggestionClick={handleSuggestionClick} />
      <InputField onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
