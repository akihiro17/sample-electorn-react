import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let ToForm = ({dispatch}) => {
  const style = Object.assign({},{
    boxSizing: 'content-box',
    width: '100%'
  });

  let input;
  const onChange= (e) => {
    e.preventDefault();
    dispatch(actions.changeTo(e.target.value));
    input.value=e.target.value;
  };

  return (
    <div style={style}>
      <p>To:</p>
      <input style={style} type="text" ref={node => {input = node;}} onChange={onChange}/>
    </div>
  );
};

ToForm = connect()(ToForm);

export default ToForm;
