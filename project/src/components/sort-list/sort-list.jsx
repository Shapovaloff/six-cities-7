import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import useOutsideClick from '../../hooks/useOutsideClick';

function SortList(props) {
  const {sorts, activeSort, setIsActive, changeSort} = props;
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
            changeSort(sort);
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
  changeSort: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeSort: ActionCreator.changeSort,
};

export default connect(null, mapDispatchToProps)(SortList);
