import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { getImages as GetImages } from '../../service/api';

import { ImageGalleryItem } from 'components';

export class ImageGallery extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps.searchQuery);
    const { searchQuery } = this.props;
    console.log('searchQuery', searchQuery);

    if (prevProps.searchQuery === searchQuery) {
      toast.warn('Enter a new search query', {
        theme: 'colored',
      });
      return;
    }

    this.setState({ query: searchQuery });
  }

  // fetchImg = async () => {
  //   const images = await GetImages(this.state.query, 1);
  // };

  render() {
    return (
      <main>
        <ul className="ImageGallery">
          <ImageGalleryItem />
        </ul>
      </main>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
