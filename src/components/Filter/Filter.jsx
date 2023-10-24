import React from 'react';
import css from './filter.module.css';

export const Filter = ({ filter, onFilterChange }) => (
  <label>
    Filter by name:
    <input className={css.filter_input} type="text" value={filter} onChange={onFilterChange} />
  </label>
);

// export default Filter;