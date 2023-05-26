import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, src, alt }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const onOverlayClick = e => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={onOverlayClick}>
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
