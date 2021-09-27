import React from 'react';
import PropTypes from 'prop-types';

function GalleryList(props) {
  const {images} = props;

  return (
    <div className="property__gallery">
      {images.map((image, id) => (
        <div className="property__image-wrapper" key={image}>
          <img  className="property__image" src={image} alt={`Studio-${id}`} />
        </div>
      ))}
    </div>
  );
}

GalleryList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GalleryList;
