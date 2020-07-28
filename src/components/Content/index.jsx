import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components';
import { Container, Spinner } from 'react-bootstrap';
import Item from './components/Item';

export default function Content() {
  const [repoList, setRepoList] = useState(null);
  const [params, setParams] = useState({});

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  const API_URL =
    'https://api.github.com/search/repositories?q=created:%3E2019-01-22&sort=stars&order=dsc';

  function getRepos() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((result) =>
        result.items.map(({ full_name, stargazers_count, html_url, owner, description, id }) => ({
          full_name,
          stargazers_count,
          html_url,
          owner,
          description,
          id,
        })),
      )
      .then((repoList) => setRepoList(repoList))
      .catch((error) => setRepoList([]));
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Container className="d-flex">
      <Sidebar params={params} onParamChange={handleParamChange} />
      <Container className="mt-4">
        {repoList === null ? (
          <Container className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" className="mt-5" />
          </Container>
        ) : repoList.length > 0 ? (
          repoList.map(({ full_name, stargazers_count, html_url, owner, description, id }) => (
            <Item
              key={id}
              full_name={full_name}
              stargazers_count={stargazers_count}
              html_url={html_url}
              owner={owner}
              description={description}
            />
          ))
        ) : (
          <Container className="d-flex justify-content-center">
            <h2>Oops, please try again</h2>
          </Container>
        )}
      </Container>
    </Container>
  );
}
