import axios from 'axios';

const ROOT_URL = 'https://api.github.com/search/repositories';

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';

export function fetchRepositories(term) {
  const url = `${ROOT_URL}?q=${term}`;
  const request = axios.get(url);

  return {
    type: FETCH_REPOSITORIES,
    payload: request
  }
}
