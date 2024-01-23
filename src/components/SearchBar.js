import React from 'react'; 

function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    // Prevent browser from redirecting after input.
    event.preventDefault()
    onSubmit('instruments');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  )
}

export default SearchBar;