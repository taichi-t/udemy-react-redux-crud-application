import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const READ_EVENT = "READ_EVENT";
export const CREATE_EVENTS = "CREATE_EVENTS";
export const UPDATE_EVENT = "UPDATE_EVENTS";
export const DELETE_EVENTS = "DELETE_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  dispatch({ type: CREATE_EVENTS, response });
};

export const putEvent = values => async dispatch => {
  const response = await axios.put(
    `${ROOT_URL}/events/${values.id}${QUERYSTRING}`,
    values
  );
  dispatch({ type: UPDATE_EVENT, response });
};

export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: READ_EVENT, response });
};

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: DELETE_EVENTS, id });
};
