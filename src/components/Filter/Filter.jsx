import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';



const Filter = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={onChange} />
  );
};

export default Filter;