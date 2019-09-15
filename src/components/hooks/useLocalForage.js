import { useReducer } from 'react';
import localforage from 'localforage';

export const actionTypes = {
  GET: 'get',
  SET: 'set',
  DELETE: 'delete'
};

export const statusTypes = {
  FETCHING: 'fetching',
  SUCCESS: 'success',
  FAILURE: 'failure'
};

const actions = ({ key, value }) => ({
  get: async () => localforage.getItem(key),
  set: async () => localforage.setItem(key, value),
  delete: async () => localforage.removeItem(key)
});

const initialState = { status: null, response: null };

const reducer = (state = initialState, { status, response }) => {
  switch (status) {
    case statusTypes.FETCHING:
      return { ...state, status };
    case statusTypes.SUCCESS:
    case statusTypes.FAILURE:
      return { ...state, response, status };
    default:
      throw new Error(`Invalid action performed: ${status}`);
  }
};

const useLocalForage = (action, key) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = async (value = null) => {
    try {
      dispatch({ status: statusTypes.FETCHING });
      const response = await actions({ key, value })[action]();
      if (response) {
        dispatch({ status: statusTypes.SUCCESS, response });
      } else {
        throw new Error(`Could not ${action}${key ? ` ${key}` : ''}`);
      }
    } catch (err) {
      dispatch({ status: statusTypes.FAILURE, response: null });
    }
  };

  return [state, makeRequest];
};

export default useLocalForage;
