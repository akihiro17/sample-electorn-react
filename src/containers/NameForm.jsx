import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as actions from '../actions';

let NameForm = ({name, dispatch}) => {
  const changeName = (e) => {
    dispatch(actions.changeName(e.target.value));
  };

  return (
    <FormGroup controlId="formControlsText">
      <ControlLabel>名前</ControlLabel>
      <FormControl placeholder="名前" value={name} onChange={changeName}/>
    </FormGroup>
  );
};

NameForm.propTypes = {
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { name: state.name };
}


NameForm = connect(mapStateToProps)(NameForm);

export default NameForm;
