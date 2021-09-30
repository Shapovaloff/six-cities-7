import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SortList from '../sort-list/sort-list';
import {connect} from 'react-redux';

function SortForm(props) {
  const {sorts, activeSort} = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setIsActive((active) => !active)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      {isActive && <SortList sorts={sorts} activeSort={activeSort} setIsActive={setIsActive} />}
    </form>
  );
}

SortForm.propTypes = {
  activeSort: PropTypes.string.isRequired,
  sorts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: state.activeSort,
});

export default connect(mapStateToProps, null)(SortForm);
