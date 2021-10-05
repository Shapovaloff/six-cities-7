import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {changeActiveSort} from '../../store/actions';
import useOutsideClick from '../../hooks/use-outside-click';

function SortList(props) {
  const {sorts, activeSort, setIsActive} = props;
  const dispatch = useDispatch();
  const ulRef = useRef(null);

  useOutsideClick(ulRef, setIsActive);

  return (
    <ul
      className="places__options places__options--custom places__options--opened"
      ref={ulRef}
      onMouseEnter={() => setIsActive(true)}
    >
      {sorts.map((sort) => (
        <li
          key={sort}
          tabIndex="0"
          className={`places__option ${activeSort === sort && 'places__option--active'}`}
          onClick={() => {
            dispatch(changeActiveSort(sort));
            setIsActive(false);
          }}
        >
          {sort}
        </li>
      ))}
    </ul>
  );
}

SortList.propTypes = {
  sorts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeSort: PropTypes.string.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default SortList;
