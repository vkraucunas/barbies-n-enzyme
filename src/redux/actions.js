import axios from 'axios';

export const GET_DOLLS = "GET_ALL_DOLLS"
export const GET_SINGLE_DOLL = "GET_SINGLE_DOLL"
export const UPDATE_DOLL = "UPDATE_DOLL"
export const ADD_DOLL = "ADD_DOLL"

const ROOT_URL = "http://192.168.1.30"

export const getDolls =  () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/dolls`)
      .then(res => (
        dispatch({
          type: GET_DOLLS,
          payload: res
        })
      )
    )
  }
}

export const getDoll = (id) => {
  const request = axios.get(`${ROOT_URL}/dolls/${id}`)

  return {
    type: GET_SINGLE_DOLL,
    payload: request
  }
}

export const addDoll = (values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/dolls`, values)
    .then(() => callback());

  return {
    type: ADD_DOLL,
    payload: request
  };
}

export const updateDoll = (values, callback) => {
  const id = values.id
  const request = axios
    .put(`${ROOT_URL}/dolls/${id}`, values)
    .then(() => callback());

  return {
    type: UPDATE_DOLL,
    payload: request
  };
}
