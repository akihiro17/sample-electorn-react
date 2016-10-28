import { combineReducers } from 'redux';

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
  function change(ids, key, index, value) {
    return ids.map((id) => {
      if (id.index == index) {
        return Object.assign(id, {[key]: value});
      } else {
        return id;
      }
    });
  }

  switch(action.type) {
  case 'CHANGE_CONTENT': {
    return change(state, 'content', action.index, action.text);
  }
  case 'CHANGE_ID': {
    return change(state, 'id', action.index, action.text);
  }
  case 'CHANGE_PASSWORD': {
    return change(state, 'password', action.index, action.text);
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
  {to, cc, division, name, game, ids}
);

export default changeText;
