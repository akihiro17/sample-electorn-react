import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let DivisionForm = ({dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  let input;
  const changeDivision = (e) => {
    e.preventDefault();
    dispatch(actions.changeDivision(e.target.value));
    input.value=e.target.value;
  };

  return (
    <div>
      <p>所属:</p>
      <input style={style} type="text" ref={(node) => {input = node;}} onChange={changeDivision} />
    </div>
  );
};

DivisionForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

DivisionForm = connect()(DivisionForm);

export default DivisionForm;
