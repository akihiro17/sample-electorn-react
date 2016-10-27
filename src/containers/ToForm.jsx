import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as actions from '../actions';

let ToForm = ({to, dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  const onChange= (e) => {
    dispatch(actions.changeTo(e.target.value));
  };

  return (
    <FormGroup controlId="formControlsText">
      <ControlLabel>To</ControlLabel>
      <FormControl placeholder="あて先" value={to} onChange={onChange}/>
    </FormGroup>
  );
};

ToForm.propTypes = {
  to: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { to: state.to };
}

ToForm = connect(mapStateToProps)(ToForm);

export default ToForm;
