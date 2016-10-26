import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let GameForm = ({game, dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  const changeGame = (e) => {
    dispatch(actions.changeGame(e.target.value));
  };

  return (
    <div>
      <p>ゲーム名</p>
      <input style={style} type="text" value={game} onChange={changeGame}/>
    </div>
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
