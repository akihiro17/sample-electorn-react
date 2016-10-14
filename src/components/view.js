import React, { Component } from 'react';

var FormWrapper = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired
  },
  changeText: function(changeset) {
    this.props.onChange(changeset);
  },
  render() {
    const style = Object.assign({},{
      borderRight: 'solid'
    });

    return (
	<div style={style}>
	<Text text={this.props.text} onChangeText={this.changeText}/>
        <NameForm name={this.props.name} onChangeName={this.changeText}/>
        <ToForm to={this.props.to} onChangeName={this.changeText}/>
	</div>
    );
  }
});

var Text = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  changeText: function(e) {
    this.props.onChangeText({key: 'text', value: e.target.value});
  },
  render() {
    const style = Object.assign({},{
      marginRight: '10%',
      marginLeft: '0%'
    });

    return (
	<div style={style}>
	<p>テキストフォーム</p>
        <input type="text" value={this.props.text} onChange={this.changeText}/>
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
    return (
        <div>
	<p>To:</p>
	<input type="text" value={this.props.name} onChange={this.changeName} />
        </div>
    );
  }
});

var NameForm = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  changeName: function(e) {
    this.props.onChangeName({key: 'name', value: e.target.value});
  },
  render() {
    return (
        <div>
	<p>名前</p>
	<input type="text" value={this.props.name} onChange={this.changeName} />
        </div>
    );
  }
});

var PreView = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    changedValue: React.PropTypes.string.isRequired
  },
  render() {
    const style = Object.assign({},{
    });

    return (
	<div style={style}>
	<p>To: {this.props.to}</p>
        <p>テストフォームの値は「{this.props.text}」です</p>
        <p>名前は「{this.props.name}」です</p>
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
      to: ""
    };
  },
  changeText: function(changeset) {
    console.log(changeset);
    switch(changeset.key) {
    case 'text':
      this.setState({text: changeset.value, changedValue: changeset.key});
      break;
    case 'name':
      this.setState({name: changeset.value, changedValue: changeset.key});
      break;
    case 'to':
      this.setState({to: changeset.value, changedValue: changeset.key});
      break;
    }
  },
  render() {
    return(
	<div style={style}>
	<FormWrapper
      onChange={this.changeText}
      text={this.state.text}
      name={this.state.name}
      to={this.state.to}
	/>
	<PreView
      text={this.state.text}
      name={this.state.name}
      to={this.state.to}
      changedValue={this.state.changedValue}
	/>
	</div>
    );
  }
});

export default View;
