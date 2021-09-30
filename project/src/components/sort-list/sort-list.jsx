import React from 'react';
import {SORTS} from '../../const';

function SortList() {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SORTS.map((sort, id) => (
        <li key={sort} className={`places__option ${id === 0 && 'places__option--active'}`} tabIndex="0">{sort}</li>
      ))}
    </ul>
  );
}

export default SortList;
