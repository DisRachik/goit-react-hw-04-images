import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const normalizeValue = this.state.inputValue.trim();
    if (!normalizeValue) {
      toast.error('Will you finally enter something? =)))', {
        theme: 'colored',
      });
      this.setState({ inputValue: '' });
      return;
    }

    this.props.onSubmit(normalizeValue);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
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
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
