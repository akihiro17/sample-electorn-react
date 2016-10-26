import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let GameForm = ({dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  let input;
  const changeGame = (e) => {
    e.preventDefault();
    dispatch(actions.changeGame(e.target.value));
    input.value=e.target.value;
  };

  return (
    <div>
      <p>ゲーム名</p>
      <input style={style} type="text" ref={(node) => {input = node;}} onChange={changeGame}/>
    </div>
  );
};

GameForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

GameForm = connect()(GameForm);

export default GameForm;
