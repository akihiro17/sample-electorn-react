import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as actions from '../actions';

let GameForm = ({game, dispatch}) => {
  const changeGame = (e) => {
    dispatch(actions.changeGame(e.target.value));
  };

  return (
   <FormGroup controlId="formControlsText">
      <ControlLabel>ゲーム名</ControlLabel>
      <FormControl placeholder="ゲーム名" value={game} onChange={changeGame}/>
    </FormGroup>
  );
};

GameForm.propTypes = {
  game: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { game: state.game };
}

GameForm = connect(mapStateToProps)(GameForm);

export default GameForm;
