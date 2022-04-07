import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './App.css'
 
function ListPaginate() {
    const [users, setUsers] = useState([]);
    const [perPage] = useState(5);
    const [offset, setOffset] = useState(1);
    const [pageCount, setPageCount] = useState(0)
    
    const allDetails = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        const data = res.data;
        const slice = data.slice(offset - 1 , offset - 1 + perPage);
        const userData = getUser(slice);

        setUsers(userData)
        setPageCount(Math.ceil(data.length / perPage))
    };

const getUser = (data) => {
    return (
      data.map(user => <div key={user.id}>
        <p>ID: {user.id}</p>
        <p>UserName: {user.username}</p>
      </div>)
    )
};
 
const handlePageClick = (event) => {
   const selectedPage = event.selected;
   setOffset(selectedPage + 1)
};
 
useEffect(() => {
    allDetails()
}, 
[offset]);

 return (
   <div className="container" >
    <div>{users}</div>
    <ReactPaginate
        className="paginate"
        pageCount={pageCount}
        previous={"previous"}
        next={"next"}
        onPageChange={handlePageClick}
    />
   </div>
 );
};
 
export default ListPaginate;