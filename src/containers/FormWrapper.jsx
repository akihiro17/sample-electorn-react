import React from 'react';
import { connect } from 'react-redux';
import NameForm from './NameForm';
import ToForm from './ToForm';
import CcForm from './CcForm';
import GameForm from './GameForm';
import DivisionForm from './DivisionForm';
import IdPasswordFormList from './IdPasswordFormList.jsx';

let FormWrapper = ({name, game, cc, to, division}) => {
  const style = {
    flexBasis: '30%',
    marginLeft: '10%'
  };

  return (
    <div style={style}>
      <ToForm to={to} />
      <CcForm cc={cc} />
      <DivisionForm division={division}/>
      <NameForm name={name} />
      <GameForm game={game} />
      <IdPasswordFormList />
    </div>
  );
};

FormWrapper.propTypes = {
  name: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  cc: React.PropTypes.string.isRequired,
  game: React.PropTypes.string.isRequired,
  division: React.PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    to: state.to,
    cc: state.cc,
    division: state.division,
    name: state.name,
    game: state.game
  };
}

FormWrapper = connect(mapStateToProps)(FormWrapper);

export default FormWrapper;
