import React from 'react';
import css from './contactlist.module.css';

export const ContactItem = ({ contact, onDeleteContact }) => (
  <li>
    {contact.name}: {contact.number}
        <button className={css.contactitem_btn} onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

// export default ContactItem;