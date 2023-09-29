import React, { useState } from 'react';
import Header from './components/Header.js';
import Search from './components/Search.js';
import SearchResults from './components/SearchResults.js';
import brandsData from './data/data.json';
import MoreInfo from './components/MoreInfo.js';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  function searchBrands(brandName, data) {
    const lowercaseBrandName = brandName.toLowerCase();
    const foundBrand = data.find((item) => item["brandName"].toLowerCase() === lowercaseBrandName);

    if (foundBrand) {
      if (foundBrand.isCruel) {
        return `Oops! ${brandName} is not cruelty-free 😞🚫. This brand is not kind to animals: make an informed choice.`;
      } else {
        return `${brandName} is cruelty-free! This brand does not test on animals 🐇❤️`;
      }
    } else {
      return `${brandName} not found.`;
    }
  }

   const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setSearchResult('');
    } else {
      const result = searchBrands(query, brandsData);
      setSearchResult(result);
    }
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} brandsData={brandsData} />
      <SearchResults result={searchResult} />
      <MoreInfo />
    </div>
  );
}

export default App;
