import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function Sidebar({ params, onParamChange }) {
  return (
    <Form className="mt-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>
            <b>Filter</b>
          </Form.Label>
          <Form.Control as="select">
            <option>Select filter</option>
            <option>Name</option>
            <option>Stars</option>
            <option>Owner</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>
            <b>Description</b>
          </Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description || ''}
            name="description"
            type="text"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
