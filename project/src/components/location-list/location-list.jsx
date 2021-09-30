import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';

function LocationList(props) {
  const {location, city, changeCity, fillOffersList} = props;

  return (
    <ul className="locations__list tabs__list">
      {location.map((item, id) => {
        const keyValue = item;

        return (
          <li key={keyValue} className="locations__item">
            <a
              className={`${item === city && 'tabs__item--active'} locations__item-link tabs__item`}
              href="#!"
              onClick={(evt) => {
                evt.preventDefault();
                changeCity(item);
                fillOffersList(item);
              }}
            >
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
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  fillOffersList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  fillOffersList: ActionCreator.fillOffersList,
};

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
