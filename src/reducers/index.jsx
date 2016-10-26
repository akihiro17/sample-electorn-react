import { combineReducers } from 'redux';
import update from 'immutability-helper';

function to(state = {}, action) {
  switch(action.type) {
  case 'CHANGE_TO':
    return action.text;
  default:
    return state;
  }
}

function cc(state = {}, action) {
  switch(action.type) {
  case 'CHANGE_CC':
    return action.text;
  default:
    return state;
  }
}

function division(state = {}, action) {
  switch(action.type) {
  case 'CHANGE_DIVISION':
    return action.text;
  default:
    return state;
  }
}

function name(state = {}, action) {
  switch(action.type) {
  case 'CHANGE_NAME':
    return action.text;
  default:
    return state;
  }
}

function game(state = {}, action) {
  switch(action.type) {
  case 'CHANGE_GAME':
    return action.text;
  default:
    return state;
  }
}

function ids(state = [], action) {
  switch(action.type) {
  case 'CHANGE_CONTENT': {
    const ids = state.map((id) => {
      if (id.index == action.index) {
        return ({id: id.id, password: id.password, content: action.text, index: id.index});
      } else {
        return id;
      }
    });
    return ids;
  }
  case 'CHANGE_ID': {
    const ids = state.map((id) => {
      if (id.index == action.index) {
        return ({id: action.text, password: id.password, content: id.content, index: id.index});
      } else {
        return id;
      }
    });
    return ids;
  }
  case 'CHANGE_PASSWORD': {
    const ids = state.map((id) => {
      if (id.index == action.index) {
        return ({id: id.id,  password: action.text, content: id.content, index: id.index});
      } else {
        return id;
      }
    });
    return ids;
  }
  case 'ADD_ID':
    return [
      ...state,
      {
        index: state.length,
        content: "",
        id: "",
        password: ""
      }
    ];
  case 'DELETE_ID':
    return state.slice(0, state.length - 1);
  default:
    return state;
  }
}

const changeText = combineReducers(
  {to, cc, division, name, game, ids: ids}
);

export default changeText;
