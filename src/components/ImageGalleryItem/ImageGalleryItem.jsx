import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, tags, webformatURL, largeImageURL }) => (
    <li className="ImageGalleryItem" key={id}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
