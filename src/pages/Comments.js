import React, { useEffect,useState } from 'react'
import "./Comments.css"

const Comments = (props) => {

  const [postData,setPostData]=useState([])
  const [commentsData,setCommentsData]=useState([])
  // console.log(postData)
  // console.log(comments)

  useEffect(()=> {
    async function fetchApi() {
      const url=`https://jsonplaceholder.typicode.com/posts/${props.pid}`
      const res= await fetch(url)
      const data= await res.json()
      setPostData(data)
      const url1 =`https://jsonplaceholder.typicode.com/posts/${props.pid}/comments`
      const res1= await fetch(url1)
      const data1= await res1.json()
      setCommentsData(data1)
    }
    fetchApi();

  },[])

  const comments= commentsData.map(({id,body}) => {
    return (
      <>
        <b>{id%5===0?5:id%5}.</b>{body}
        <br />
      </>
    )
  })

  return (
    <div className="top-container">
      <h1>User {postData.userId}</h1>
      <h1> Post {postData.id%10===0?10:postData.id%10}</h1>
      <h3>Title : </h3>
      <p>{postData.title}</p>
      <h3>Content : </h3>
      <p>{postData.body}</p>
      <h3>Comments : </h3>
      {comments}
    </div>
  )
}

export default Comments