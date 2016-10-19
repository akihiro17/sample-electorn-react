import React, { Component } from 'react';
import PreView from './Preview';
import NameForm from './NameForm';
import IdPasswordFormList from './IdPasswordFormList.jsx';

var FormWrapper = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    game: React.PropTypes.string.isRequired
  },
  changeText: function(changeset) {
    this.props.onChange(changeset);
  },
  render() {
    const style = Object.assign({},{
    });

    return (
      <div style={style}>
        <NameForm name={this.props.name} onChangeName={this.changeText}/>
        <ToForm to={this.props.to} onChangeName={this.changeText}/>
        <GameForm game={this.props.game} onChangeName={this.changeText}/>
      </div>
    );
  }
});

var ToForm = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired
  },
  changeName: function(e) {
    this.props.onChangeName({key: 'to', value: e.target.value});
  },
  render() {
    const style = Object.assign({},{
      marginRight: '10%'
    });

    return (
      <div style={style}>
	<p>To:</p>
	<input type="text" value={this.props.name} onChange={this.changeName} />
      </div>
    );
  }
});

var GameForm = React.createClass({
  propTypes: {
    game: React.PropTypes.string.isRequired
  },
  changeGame: function(e) {
    this.props.onChangeName({key: 'game', value: e.target.value});
  },
  render() {
    return (
        <div>
	  <p>game</p>
	  <input type="text" value={this.props.game} onChange={this.changeGame} />
        </div>
    );
  }
});

const style = Object.assign({},{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '100%'
});

const View = React.createClass({
  getInitialState() {
    return {
      changedValue: "",
      text: "",
      name: "h-izu",
      to: "",
      ids: [ {id: '', password: "", index: 0}],
      game: ""
    };
  },
  changeText: function(changeset) {
    console.log(changeset);
    switch(changeset.key) {
    case 'name':
      this.setState({name: changeset.value, changedValue: changeset.key});
      break;
    case 'to':
      this.setState({to: changeset.value, changedValue: changeset.key});
      break;
    case 'game':
      this.setState({game: changeset.value, changedValue: changeset.key});
      break;
    case 'ids':
      this.setState({ids: changeset.value, changedValue: changeset.key});
      break;
    }
  },
  render() {
    return(
	<div style={style}>
	<FormWrapper
	   onChange={this.changeText}
	   name={this.state.name}
	   to={this.state.to}
	   game={this.state.game}
	/>
	<IdPasswordFormList onChange={this.changeText}/>
	<PreView
	   name={this.state.name}
	   to={this.state.to}
	   game={this.state.game}
	   ids={this.state.ids}
	   changedValue={this.state.changedValue}
	/>
	</div>
    );
  }
});

export default View;
