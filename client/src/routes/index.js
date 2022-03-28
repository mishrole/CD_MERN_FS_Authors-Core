import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllAuthors from '../views/_allAuthors';
import NewAuthor from '../views/_newAuthor';
import EditAuthor from '../views/_editAuthor';
import NotFound from '../views/_notFound';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={ <AllAuthors /> } />
      <Route path="/new" element={ <NewAuthor /> } />
      <Route path="/:id/edit" element={ <EditAuthor /> }/>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default Root;