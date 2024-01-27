import React from 'react'; 
import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  // set State with an empty string.
  const [term, setTerm] = useState(''); 


  const handleFormSubmit = (event) => {
    // Prevent browser from redirecting after input.
    event.preventDefault()
    onSubmit(term);
  };

  const handleChange = (event) => {
    // Update setTerm with the value that was retrieved.
    setTerm(event.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search Instruments:</label>
        <input value={term} onChange={handleChange} />
        {term.length < 3 && "Search term must be longer!"}
      </form>
    </div>
  )
}

export default SearchBar;