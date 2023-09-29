import React, { useState, useEffect } from 'react';
import Suggestions, { getSuggestions } from './Suggestions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function Search({ onSearch, brandsData, showNotFound }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);

  const suggestions = getSuggestions(query, brandsData);

  useEffect(() => {
    const handleKeyDown = (event) => {
  if (event.key === 'ArrowDown' && selectedSuggestion < suggestions.length - 1) {
    setSelectedSuggestion(selectedSuggestion + 1);
  } else if (event.key === 'ArrowUp' && selectedSuggestion > 0) {
    setSelectedSuggestion(selectedSuggestion - 1);
  } else if (event.key === 'Enter' && selectedSuggestion !== -1) {
    handleSuggestionClick(suggestions[selectedSuggestion]);
    setShowSuggestions(false);
  } else if (event.key === 'Enter' || event.key === 'Return') {
    if (selectedSuggestion === -1) {
      onSearch(query);
      setShowSuggestions(false);
    }
  }
};
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSuggestion, suggestions]);


  const handleInputChange = (event) => {
  const query = event.target.value;
  setQuery(query);
  setShowSuggestions(true);
  setSelectedSuggestion(-1);
};

const handleSearchClick = () => {
  onSearch(query);
};

const handleSearchSubmit = (event) => {
  event.preventDefault();
  onSearch(query);
  setShowSuggestions(false);
};


  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="search--title">
        <h2>Wondering if a brand is cruelty-free?</h2>
        <p>Enter the brand name to find out! 🌿🔍</p>
      </div>
      <div className="search--bar">
        <input
          type="text"
          placeholder="Is it cruelty-free?"
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-icon" onClick={handleSearchClick}><FontAwesomeIcon icon={faMagnifyingGlass} />
</button>
        {showSuggestions && query && (
          <Suggestions
            suggestions={suggestions}
            selectedSuggestion={selectedSuggestion}
            onSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
    </form>
  );
}
