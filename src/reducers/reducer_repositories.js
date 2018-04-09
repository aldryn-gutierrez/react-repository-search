import { FETCH_REPOSITORIES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return action.payload.data.items;
      break;
  }
  return state;
}
