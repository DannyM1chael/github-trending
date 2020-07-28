import React, { useState } from 'react';
import Star from './Star';
import { Card, Button, Collapse } from 'react-bootstrap';

export default function Item({ full_name, stargazers_count, html_url, owner, description }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="mb-3 ml-5">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              <span className="text-muted font-weight-light">{full_name}</span>
            </Card.Title>
            <Star stars={stargazers_count} />
            <div className="mb-3">
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                {html_url}
              </a>
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            src={owner.avatar_url}
            alt={owner.avatar_url}
          />
        </div>
        <Card.Text>
          <Button variant="primary" onClick={() => setOpen((prevOpen) => !prevOpen)}>
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          {description ? (
            <div className="mt-4">{description}</div>
          ) : (
            <div className="mt-4">
              <b>{owner.login}</b> doesn't provide any description
            </div>
          )}
        </Collapse>
      </Card.Body>
    </Card>
  );
}
