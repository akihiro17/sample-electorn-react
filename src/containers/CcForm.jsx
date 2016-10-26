import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let CcForm = ({dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  const changeCc = (e) => {
    e.preventDefault();
    dispatch(actions.changeCc(e.target.value));
  };

  return (
    <div>
      <p>Cc:</p>
      <input style={style} type="text" onChange={changeCc}/>
    </div>
  );
};

CcForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

CcForm = connect()(CcForm);

export default CcForm;
