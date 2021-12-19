import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApiAction, DeleteApiAction } from "../redux/action/action";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.reducer.details);
  console.log(response);
  const isDeleteResponse = useSelector(
    (state) => state.reducer.isDeleteResponse
  );
  console.log(isDeleteResponse);
  let navigate = useNavigate();

  useEffect(() => {
    getDetails();
  }, [dispatch]);

  const getDetails = () => {
    dispatch(GetApiAction());
  };

  const deleteById = (id) => {
    dispatch(DeleteApiAction(id));
    if (isDeleteResponse) {
      getDetails();
    }
  };

  if (isDeleteResponse) {
    getDetails();
  }

  const editById = (data) => {
    navigate(`/edit/${data.id}`);
  };

  const result = response
    ? response.map((data, index) => {
        console.log(data);
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.country}</td>
            <td>
              <Button variant="primary" onClick={() => editById(data)}>
                Update
              </Button>{" "}
              <Button variant="danger" onClick={() => deleteById(data.id)}>
                Delete
              </Button>
            </td>
          </tr>
        );
      })
    : null;
  return (
    <div>
      <h1>Home</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </Table>
    </div>
  );
}

export default Home;
