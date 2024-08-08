import React from 'react';
import '../styles/Suggetions.scss';

const suggestions = [
  'Hello',
  'Help',
  'Bye',
  'Services',
  'Web Development',
  'Design',
  'Marketing',
  'Pricing',
  'Contact',
  'Thank You'
];

const Suggestions = ({ onSuggestionClick }) => {
  return (
    <div className="suggestions">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="suggestion-button"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
