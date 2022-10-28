import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

const Home = ({ change }) => {
  const [user, setUser] = useState([]);

  // const routes = user.map(({ id }) => {
  //   return (
  //     <Route
  //     exact
  //       key={id}
  //       path={`/posts/${id}`}
  //       element={<Posts uid={id} />}
  //     ></Route>
  //   );
  // })

  const table = user.map(({ id, username, address, company }) => {
    return (
      <>
        <tr key={id}>
          <td>{id}</td>
          <td>{username}</td>
          <td>{address.city}</td>
          <td>{company.name}</td>
          <td>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/posts/${id}`}
                  onClick={() => change(id)}
                >
                  Post
                </Dropdown.Item>
                <Dropdown.Item as={Link} onclick={()=>change(id)} to={`/albums/${id}`}>
                  Album
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr>
      </>
    );
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Company</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{table}</tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
