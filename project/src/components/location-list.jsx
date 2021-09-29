import React from 'react';
import PropTypes from 'prop-types';

function LocationList(props) {
  const {location} = props;

  return (
    <ul className="locations__list tabs__list">
      {location.map((item, id) => {
        const keyValue = item;

        return (
          <li key={keyValue} className="locations__item">
            <a className={`${id === 3 && 'tabs__item--active'} locations__item-link tabs__item`} href="#!">
              <span>{item}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

LocationList.propTypes = {
  location: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default LocationList;
