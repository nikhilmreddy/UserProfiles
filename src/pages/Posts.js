import React, { useState,useEffect } from 'react'
import {Table,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const [post,setPost]=useState([])
    const filtered = post.filter(item=> {
      return props.usid===item.userId;
    })

    const content=filtered.map(({id,title,body})=> {
      return <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td><Button as={Link} state={filtered} onClick={() => props.changeP(id)} to={`/posts/comments/${id}`} variant='secondary'>click</Button></td>
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
      <h1>User {props.usid}</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </Table>

      </div>
    </>
  )
}

export default Posts