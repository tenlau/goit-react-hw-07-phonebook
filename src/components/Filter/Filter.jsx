// components/Filter/Filter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => (
  <div className={styles.filter}>
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        className={styles.input}
      />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
