import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import changeText from './reducers';
import View from './components/View';

const initialState = {
  to: "",
  cc: "",
  division: "",
  name: "",
  game: "",
  ids: [
    {
      index: 0,
      content: "",
      id: "",
      password: ""
    }
  ]
};

const store = createStore(changeText, initialState);

render(
  <Provider store={store}>
    <View />
  </Provider>,
  document.getElementById('root')
);
