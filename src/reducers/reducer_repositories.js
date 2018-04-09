import { FETCH_REPOSITORIES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      const payloadData = action.payload.data;
      if (payloadData && payloadData.items) {
        return payloadData.items;
      }
      break;
  }
  return state;
}
