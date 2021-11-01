import React from 'react';
import './App.css';
import Postlist from './component/Postlist';
import { useState, useEffect } from 'react';
import Pagination from './component/pagination';


function App() {

  const [postlist, setPostlist] = useState();

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows:51
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  })

  useEffect(() => {
    fetch(`https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=${filter._page}`)
      .then(response => response.json())
      .then(dataResponse => {
        const { data, pagination } = dataResponse
        setPostlist(data);
        setPagination(pagination);

      });


  }, [filter])

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setFilter({
      ...filter,
      _page: newPage,
    })
  }

  return (
    <>
      <h1>wellcome to postlists</h1>
      <Postlist postlist={postlist} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </>
  );


}

export default App;
