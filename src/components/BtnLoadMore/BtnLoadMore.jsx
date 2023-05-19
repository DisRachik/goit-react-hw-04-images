import PropTypes from 'prop-types';

export const BtnLoadMore = ({ handleLoad }) => (
  <button type="button" className="Button" onClick={handleLoad}>
    Load More
  </button>
);

BtnLoadMore.propTypes = {
  handleLoad: PropTypes.func.isRequired,
};
