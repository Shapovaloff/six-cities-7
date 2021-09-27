import React from 'react';
import PropTypes from 'prop-types';

function GoodsList(props) {
  const {goods} = props;

  return (
    <ul className="property__inside-list">
      {goods.map((goodItem) => (
        <li key={goodItem} className="property__inside-item">{goodItem}</li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
