import React, { useState } from 'react';
import Header from '../components/Header/Header';
import AuthorForm from '../components/Author/AuthorForm';
import { postAuthor } from '../helpers/postAuthor';
import { errorMessage, successMessage } from '../utils/SwalMessage';
import { useNavigate } from 'react-router-dom';

const _newAuthor = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onFormSubmit = (data) => {
    postAuthor(data)
    .then(({ data }) => {
      successMessage(`<p>${data?.author?.name} has been added successfully!</p><p>Generated Id: ${data?.author?._id}</p>`);
      navigate(`/`);
    })
    .catch((err) => {
      const errors = err?.error?.errors;
      const errorArr = [];
      let errorsHTML = "";

      for (const key of Object.keys(errors)) {
        errorArr.push(errors[key].message);
        errorsHTML += `<p>${errors[key].message}</p>`;
      }

      setErrors(errorArr);
      
      errorMessage(err.error._message || err.message, errorsHTML || err.error.message);
    });
  }

  return (
    <>
    <Header />
    <div className="container py-3">
      {
        errors.map((err, index) =>  <p key={index} className="text-danger">{err}</p>)
      }
    </div>
    <AuthorForm onSubmitProp={ onFormSubmit }/>
    </>
  )
}

export default _newAuthor;