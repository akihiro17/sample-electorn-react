import update from 'immutability-helper';

export function changeText(state, action) {
  switch(action.type) {
  case 'CHANGE_TO':
    return update(state, {to: {$set: action.text}});
  case 'CHANGE_CC':
    return update(state, {cc: {$set: action.text}});
  case 'CHANGE_DIVISION':
    return update(state, {division: {$set: action.text}});
  case 'CHANGE_NAME':
    return update(state, {name: {$set: action.text}});
  case 'CHANGE_GAME':
    return update(state, {game: {$set: action.text}});
  case 'CHANGE_CONTENT':
    const new_state = state.ids.map((id) => {
      if (id.index == action.index) {
        return ({id: id.id, password: id.password, content: action.text, index: id.index});
      } else {
        return id;
      }
    });
    return update(state, {ids: {$set: new_state}});
  case 'CHANGE_ID':
    const content_changed = state.ids.map((id) => {
      if (id.index == action.index) {
        return ({id: action.text, password: id.password, content: id.content, index: id.index});
      } else {
        return id;
      }
    });
    return update(state, {ids: {$set: content_changed}});
  case 'CHANGE_PASSWORD':
    const password_changed = state.ids.map((id) => {
      if (id.index == action.index) {
        return ({id: id.id,  password: action.text, content: id.content, index: id.index});
      } else {
        return id;
      }
    });
    return update(state, {ids: {$set: password_changed}});
  case 'ADD_ID':
    return Object.assign({}, state,{
      ids:[
        ...state.ids,
        {
          index: state.ids.length,
          content: "",
          id: "",
          password: ""
        }
      ]
    });
  case 'DELETE_ID':
    return Object.assign({}, state, {
      ids: state.ids.slice(0, state.ids.length - 1)
    });
  default:
    return state;
  };
}

export default changeText;
