import React from 'react'
import PropTypes from 'prop-types';


function Filter({ filter, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;