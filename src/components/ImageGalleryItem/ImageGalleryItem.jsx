import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components';

export const ImageGalleryItem = ({ img }) => {
  const { webformatURL, tags, largeImageURL } = img;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(prevState => !prevState);

  return (
    <li className="ImageGalleryItem" onClick={toggleModal}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      {modalOpen && (
        <Modal onClose={toggleModal} src={largeImageURL} alt={tags} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
