import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import * as ReactBootStrap from "react-bootstrap";


const Todo = () => {
  const [todo, setTodo] = useState([]);




  const filtered=todo.map((item)=>item.completed===true?
  {...item,completed:"completed"}:{...item,completed:"pending"})

  console.log(filtered)
  async function fetchApi() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const columns=[
    {dataField:"id",text:"S.Id"},
    {dataField:"title",text:"Title"},
    {dataField:"completed",text:"Status"}
  ]

  return (
    <>
    <BootstrapTable className="todo-table"
      keyField="name"
      data={filtered}
      columns={columns}
      pagination={paginationFactory({ sizePerPage:7, totalSize:filtered.length, sizePerPageList:[]})}
      />
    </>
  );
};

export default Todo;
