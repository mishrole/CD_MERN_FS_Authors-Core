import React, { useEffect, useState } from 'react';
import ListAuthors from '../components/Author/ListAuthors';
import Header from '../components/Header/Header';
import { errorMessage } from '../utils/SwalMessage';
import { getAuthors } from './../helpers/getAuthors';

const AllAuthors = () => {

  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAuthors()
    .then(({ data }) => {
      setAuthors(data);
      setLoaded(true);
    })
    .catch((err) => {
      errorMessage(err);
    });
  },[]);

  return (
    <>
    <Header />
    <div className="py-3">
      {
        loaded && <ListAuthors authors={ authors } setAuthors={ setAuthors } />
      }
    </div>
    </>
  )
}

export default AllAuthors;