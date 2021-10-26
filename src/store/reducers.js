import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { getPersistedReducer } from './persist';
import general from './general';
import auth from './auth';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  general,
  auth: getPersistedReducer('auth', auth)
  // general: getPersistedReducer('general', general),
})

export default createRootReducer;