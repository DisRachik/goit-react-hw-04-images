import { Modal } from 'components';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.img;
    return (
      <li className="ImageGalleryItem" onClick={this.toggleModal}>
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
        {this.state.modalOpen && (
          <Modal onClose={this.toggleModal} src={largeImageURL} alt={tags} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
