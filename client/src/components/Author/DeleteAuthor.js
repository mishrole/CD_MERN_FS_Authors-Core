import React from 'react';
import { deleteAuthor } from '../../helpers/deleteAuthor';
import { errorMessage, successMessage } from '../../utils/SwalMessage';

const DeleteAuthor = (props) => {
  const { authorId, successCallback } = props;

  const removeAuthor = (authorId) => {
    deleteAuthor(authorId)
    .then(({ data }) => {
      successMessage(`<p>The record has been deleted successfully!</p>`);
      successCallback();
    })
    .catch((err) => {
      errorMessage(err.error._message || err.message, err.error.message);
    });
  }

  return (
    <button className="btn btn-danger" onClick={ (e) => { removeAuthor(authorId) } }>Delete</button>
  )
}

export default DeleteAuthor;