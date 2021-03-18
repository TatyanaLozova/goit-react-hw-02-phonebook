import React from 'react'
import PropTypes from 'prop-types';


function Filter({ filter, changeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;