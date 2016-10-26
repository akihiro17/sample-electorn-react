import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let NameForm = ({dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  let input;
  const changeName = (e) => {
    e.preventDefault();
    dispatch(actions.changeName(e.target.value));
    input.value = e.target.value;
  };

  return (
    <div>
      <p>名前</p>
      <input style={style} type="text" ref={(node) => {input = node;}} onChange={changeName}/>
    </div>
  );
};

NameForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};


NameForm = connect()(NameForm);

export default NameForm;
