import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as actions from '../actions';

let DivisionForm = ({division, dispatch}) => {
  const changeDivision = (e) => {
    dispatch(actions.changeDivision(e.target.value));
  };

  return (
    <FormGroup controlId="formControlsText">
      <ControlLabel>所属</ControlLabel>
      <FormControl placeholder="所属" value={division} onChange={changeDivision}/>
    </FormGroup>
  );
};

DivisionForm.propTypes = {
  division: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { division: state.division };
}

DivisionForm = connect(mapStateToProps)(DivisionForm);

export default DivisionForm;
