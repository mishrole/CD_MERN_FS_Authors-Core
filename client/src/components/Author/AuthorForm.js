import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { formIsValid } from '../../utils/FormValidation';
import { errorMessage } from '../../utils/SwalMessage';

const reducer = (state, action) => {
  if (action.type === 'reset') {
    return initialState;
  }

  if (action.type === 'overwrite') {
    return action.payload;
  }

  return {
    ...state,
    [action.type]: action.payload
  }
}

const initialState = {
  name: {
    value: '',
    error: null
  }
}

const AuthorForm = (props) => {

  const { onSubmitProp, author } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (author) {
      dispatch({
        type: 'overwrite',
        payload: {
          name: {
            value: author.name,
            error: null
          }
        }
      })
    }
  }, [author])

  // const clearForm = () => {
  //   dispatch({ type: 'reset' });
  // }

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let isValid = false;

    if (type === 'text' || type === 'textarea') {
      isValid = value.length > 0;
    }

    if (type === 'number') {
      isValid = value > 0;
    }

    dispatch({
      type: name,
      payload: {
        value: value,
        error: {
          result: isValid ? 'is-valid' : 'is-invalid',
          message: isValid ? 'Looks good!' : `Please provide a valid ${name}`
        }
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formIsValid(e)) {
      const data = {
        id: author?.id,
        name: state.name.value
      };

      onSubmitProp(data);
      
      // if (!author) {
      //   clearForm();
      // }

    } else {
      errorMessage('Please provide valid data');
    }
  }

  return (
    <div className="container">
      <h3>New Author</h3>
      <form className="row pt-3" onSubmit={ handleSubmit }>
        <div className="col-12  mb-3">
          <label className="form-label fw-bold">Name</label>
          <input type="text" value={ state.name.value } onChange={ handleChange } name="name" className={`form-control ${ state.name.error?.result }`} />
          {
            state.name.error !== null && (<p className={`${ state.name.error?.result === 'is-valid' ? 'valid-feedback' : 'invalid-feedback' }`}> {state.name.error?.message }</p>)
          }
        </div>

        <div className="col-12 mb-3 d-flex justify-content-center gap-2">
          <div>
            <Link className="btn btn-secondary" to="/">Cancel</Link>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">{ author ? 'Update' : 'Create'} Author</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthorForm;