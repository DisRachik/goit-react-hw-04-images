import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MagnifyingGlass } from 'react-loader-spinner';

import { getImages as GetImages } from '../../service/api';

import { BtnLoadMore, ImageGalleryItem } from 'components';

export class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: '',
    totalImages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;
    const { query, page } = this.state;

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({
        query: searchQuery,
        page: 1,
        images: [],
        totalImages: 0,
      });
      this.fetchImg(searchQuery, page);
    }
    if (prevState.page !== page) {
      this.fetchImg(query, page);
    }
  }

  fetchImg = async (query, page) => {
    try {
      this.setState({ isLoading: true, error: '' });

      const data = await GetImages(query, page);
      const images = data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images],
          totalImages: data.totalHits,
        };
      });
    } catch (error) {
      this.setState({ error: 'Something went wrong, try again!' });
      toast.error(this.state.error, {
        theme: 'colored',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  addNextImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalImages, isLoading } = this.state;
    return (
      <main>
        <ul className="ImageGallery">
          {Boolean(images.length) &&
            images.map(image => (
              <ImageGalleryItem img={image} key={image.id} />
            ))}
        </ul>

        {isLoading && <MagnifyingGlass />}
        {images.length < totalImages && (
          <BtnLoadMore handleLoad={this.addNextImages} />
        )}
      </main>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
