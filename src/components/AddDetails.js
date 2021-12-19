import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PostApiAction } from "../redux/action/action";
import { useNavigate } from "react-router-dom";

function AddDetails() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const addDetail = () => {
    const finalObj = {
      name: name,
      email: email,
      phone: phone,
      country: country,
    };
    console.log(finalObj);
    dispatch(PostApiAction(finalObj));
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    navigate("/");
  };

  return (
    <div>
      <h1>Add Details</h1>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={addDetail}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddDetails;
