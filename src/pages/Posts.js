import React, { useState,useEffect } from 'react'
import Table from "react-bootstrap/Table";

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from "react-bootstrap"

const Posts = ({usid}) => {
    const [post,setPost]=useState([])

    const filtered = post.filter(item=> {
      return usid===item.userId;
    })

    const content=filtered.map(({id,title,body})=> {
      return <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    })
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((response) => response.json())
      .then((json) => setPost(json));
    },[])

    


  return (
    <>
    <div>
      <h1>User {usid}</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.ID</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </Table>
      </div>
    </>
  )
}

export default Posts