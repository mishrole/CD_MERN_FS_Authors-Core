import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center">
      <div className="row">
        <div className="col-md-6 py-2">
        <img src="/404.svg" alt="404 Not found" className="img-fluid" />
        </div>
        <div className="col-md-4 d-flex py-2">
          <div className="d-flex flex-column justify-content-center">
          <h3>Sorry, we couldn't found the author you were looking for. Do you want to add this author to our database?</h3>
          <Link className="btn btn-primary" to="/new">Go to Form</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound