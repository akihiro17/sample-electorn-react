import React from 'react';
import NameForm from './NameForm';
import ToForm from './ToForm';
import CcForm from './CcForm';
import GameForm from './GameForm';
import DivisionForm from './DivisionForm';
import IdPasswordFormList from './IdPasswordFormList.jsx';

const FormWrapper = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    cc: React.PropTypes.string.isRequired,
    game: React.PropTypes.string.isRequired,
    division: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },
  changeText(changeset) {
    this.props.onChange(changeset);
  },
  render() {
    const style = Object.assign({},{
      flexBasis: '30%',
      marginLeft: '10%'
    });

    return (
      <div style={style}>
        <ToForm to={this.props.to} onChangeTo={this.changeText}/>
        <CcForm cc={this.props.cc} onChangeCc={this.changeText}/>
        <DivisionForm division={this.props.division} onChangeDivision={this.changeText}/>
	<NameForm name={this.props.name} onChangeName={this.changeText}/>
        <GameForm game={this.props.game} onChangeGame={this.changeText}/>
	<IdPasswordFormList onChange={this.changeText}/>
      </div>
    );
  }
});

export default FormWrapper;
