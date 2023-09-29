import React from 'react';

export function getSuggestions(query, brandsData) {
  const trimmedQuery = query.trim().toLowerCase();
  if (!trimmedQuery) {
    return [];
  }
  return brandsData
    .filter((brand) => brand.brandName.toLowerCase().includes(trimmedQuery))
    .map((brand) => brand.brandName);
}

export default function Suggestions({ suggestions, selectedSuggestion, onSuggestionClick }) {
  return (
    <ul className="suggestions">
      {suggestions.map((suggestion, index) => (
        <li
          key={suggestion}
          onClick={() => onSuggestionClick(suggestion)}
          className={index === selectedSuggestion ? 'selected' : ''}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
