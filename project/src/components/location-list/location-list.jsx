import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function LocationList(props) {
  const {location, city, changeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {location.map((item, id) => {
        const keyValue = item;

        return (
          <li key={keyValue} className="locations__item">
            <Link
              className={`${item === city && 'tabs__item--active'} locations__item-link tabs__item`}
              to={AppRoute.MAIN}
              onClick={() => {
                changeCity(item);
              }}
            >
              <span>{item}</span>
            </Link>
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
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
};

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
