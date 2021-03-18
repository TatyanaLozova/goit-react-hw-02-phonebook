import React from "react";
import PropTypes from "prop-types";


const ContactList = ({ contact, deleteContact }) => {
  return (
    <ul>
      {contact.map(({ id, name, number }) => (
        <li key={id}>
              <p>{name}: </p>
              <p>{number}</p>
          <button
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;