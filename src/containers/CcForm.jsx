import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let CcForm = ({cc, dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  const changeCc = (e) => {
    dispatch(actions.changeCc(e.target.value));
  };

  return (
    <div>
      <p>Cc:</p>
      <input style={style} type="text" value={cc} onChange={changeCc}/>
    </div>
  );
};

CcForm.propTypes = {
  cc: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { cc: state.cc };
}

CcForm = connect(mapStateToProps)(CcForm);

export default CcForm;
