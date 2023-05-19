import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Searchbar, ImageGallery } from 'components';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  searchQuery = searchQuery => {
    if (searchQuery === this.state.searchQuery) {
      toast.warn('Enter a new search query', {
        theme: 'colored',
      });
      return;
    }
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </>
    );
  }
}
