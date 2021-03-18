import React from "react";
import PropTypes from "prop-types";


const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <ul>
      {contact.map(({ id, name, number }) => (
        <li key={id}>
              <p>{name}: </p>
              <p>{number}</p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
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
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;