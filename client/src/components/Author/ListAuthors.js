import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteAuthor from './DeleteAuthor';

const ListAuthors = (props) => {
  const { authors, setAuthors } = props;
  const navigate = useNavigate();

  const goToEdit = (id) => {
    navigate(`/${id}/edit`);
  }

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter(author => author._id !== authorId));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <div className="py-3">
            <h1>Favorite Authors</h1>
            <h3>We have quotes by</h3>
          </div>
          <div className="py-3">
            <Link className="btn btn-primary" to="/new">Add Author</Link>
          </div>
        </div>
      </div>
      <div className="row">
      {
        authors.length > 0 ? authors.map((author, index) => {
          return (
            <div className="col-12 col-md-6 p-2" key={ index }>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8">
                      <h5 className="card-title">{ author.name }</h5>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-end align-items-center">
                        <span className="badge rounded-pill bg-primary">
                          { author._id }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-info" onClick={ () => goToEdit(author._id) }>Edit</button>
                    <DeleteAuthor authorId={ author._id } successCallback={ () => { removeFromDom(author._id) } }/>
                  </div>
                </div>
              </div>
            </div>
          )
        }) : <p>There's no authors yet 😥</p>
      }
      </div>
    </div>
  )
}

export default ListAuthors;