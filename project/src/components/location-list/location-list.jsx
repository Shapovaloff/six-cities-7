import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getActiveCity} from '../../store/app-ui/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {changeActiveCity} from '../../store/actions';

function LocationList(props) {
  const {location} = props;
  const city = useSelector(getActiveCity);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {location.map((item) => (
        <li key={item} className="locations__item">
          <Link
            className={`${item === city && 'tabs__item--active'} locations__item-link tabs__item`}
            to={AppRoute.MAIN}
            onClick={() => {
              dispatch(changeActiveCity(item));
            }}
          >
            <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  location: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default memo(LocationList);
