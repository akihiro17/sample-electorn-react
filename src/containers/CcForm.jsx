import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as actions from '../actions';

let CcForm = ({cc, dispatch}) => {
  const changeCc = (e) => {
    dispatch(actions.changeCc(e.target.value));
  };

  return (
    <FormGroup controlId="formControlsText">
      <ControlLabel>CC</ControlLabel>
      <FormControl placeholder="CC" value={cc} onChange={changeCc}/>
    </FormGroup>
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
