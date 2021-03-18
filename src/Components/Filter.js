import React from 'react'
import PropTypes from 'prop-types';


function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;