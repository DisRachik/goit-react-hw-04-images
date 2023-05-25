import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const normalizeValue = inputValue.trim();
    if (!normalizeValue) {
      toast.error('Will you finally enter something? =)))', {
        theme: 'colored',
      });
      setInputValue('');
      return;
    }

    onSubmit(normalizeValue);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <SearchIcon />
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
