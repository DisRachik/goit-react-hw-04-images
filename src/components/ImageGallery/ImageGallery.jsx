import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MagnifyingGlass } from 'react-loader-spinner';

import { getImages as GetImages } from '../../service/api';

import { BtnLoadMore, ImageGalleryItem } from 'components';

export const ImageGallery = ({ searchQuery }) => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchImg = async (query, page) => {
      try {
        setIsLoading(true);

        const data = await GetImages(query, page);

        if (!data.totalHits) {
          setImages([]);
          setPage(1);
          setTotalImages(0);
          setError(
            'Sorry, there are no images matching your search query. Please try again.'
          );

          return;
        }

        const newImages = data.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );

        setImages(prevState =>
          page === 1 ? [...newImages] : [...prevState, ...newImages]
        );
        setTotalImages(data.totalHits);
      } catch (error) {
        setError('Something went wrong, try again!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImg(searchQuery, page);
  }, [page, searchQuery]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        theme: 'colored',
      });
    }
    setError('');
  }, [error]);

  const addNextImages = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <main>
      <ul className="ImageGallery">
        {Boolean(images.length) &&
          images.map(image => <ImageGalleryItem img={image} key={image.id} />)}
      </ul>

      {isLoading && <MagnifyingGlass />}
      {images.length < totalImages && (
        <BtnLoadMore handleLoad={addNextImages} />
      )}
    </main>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
