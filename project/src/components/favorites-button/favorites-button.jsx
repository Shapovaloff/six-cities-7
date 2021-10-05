import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ClassesCardType, IS_FAVORITES, IS_NOT_FAVORITES} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {getIsFavoritesError} from '../../store/user-data/selectors';
import Alert from '../alert/alert';
import {setFavorites} from '../../store/api-actions';

function FavoritesButton(props) {
  const {id, isFavorite, buttonType = ClassesCardType.FAVORITES} = props;
  const isFavoritesError = useSelector(getIsFavoritesError);
  const dispatch = useDispatch();

  const widthIcon = buttonType === ClassesCardType.FAVORITES ? '31' : '18';
  const heightIcon = buttonType === ClassesCardType.FAVORITES ? '33' : '19';
  const btnClass = buttonType === ClassesCardType.FAVORITES
    ? `property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`
    : `place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`;

  return (
    <Fragment>
      {isFavoritesError && <Alert />}
      <button
        className={btnClass}
        type="button"
        onClick={() => {
          dispatch(
            setFavorites({
              id,
              status: isFavorite ? IS_NOT_FAVORITES : IS_FAVORITES,
            }),
          );
        }}
      >
        <svg className={buttonType === ClassesCardType.FAVORITES ? 'property__bookmark-icon' : 'place-card__bookmark-icon'}
          width={widthIcon}
          height={heightIcon}
        >
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </Fragment>
  );
}

FavoritesButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  buttonType: PropTypes.string,
};

export default FavoritesButton;
