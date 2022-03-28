import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import AuthorForm from '../components/Author/AuthorForm';
import { getAuthor } from '../helpers/getAuthor';
import { putAuthor } from '../helpers/putAuthor';
import { errorMessage, successMessage } from '../utils/SwalMessage';

const _editAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const goToNotFound = () => {
    navigate('/404');
  }

  useEffect(() => {
    getAuthor(id)
    .then(({ data }) => {
      
      if (!data) {
        goToNotFound();
      }

      setAuthor({
        id: id,
        name: data.name
      });
      setLoaded(true);
    })
    .catch((err) => {
      errorMessage(err);
    })
  }, [id]);

  const onFormSubmit = (data) => {
    const id = data.id;
    putAuthor(id, data)
    .then(({ data }) => {
      successMessage(`<p>${data?.name} has been updated successfully!</p>`);
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
      { loaded && <AuthorForm onSubmitProp={ onFormSubmit } author={ author } />}
    </>
  )
}

export default _editAuthor;