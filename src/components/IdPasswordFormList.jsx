import React, { Component } from 'react';
import update from 'immutability-helper';

var IdPasswordFormList = React.createClass({
  getInitialState() {
    return {
      ids: [ {id: '', password: "", index: 0} ]
    };
  },
  changeText: function(changeset) {
    var new_state = this.state.ids.map((id) => {
      if (id.index == changeset.index) {
	var target_id = this.state.ids[changeset.index];
	switch(changeset.key) {
	case 'content':
	  return {id: id.id, password: id.password, content: changeset.value, index: id.index};
	case 'id':
	  return {id: changeset.value, password: id.password, content: id.content, index: id.index};
	case 'password':
	  return {id: id.id, password: changeset.value, content: id.content, index: id.index};
	default:
	  return id;
	}
      } else {
	return id;
      }
    });
    this.setState({ids: new_state});
    this.props.onChange({key: 'ids', value: new_state});
  },
  onClick() {
    var new_state = update(this.state.ids, {$push: [{id: '', password: '', content: '', index: this.state.ids.length}]});
    this.setState({ids: new_state});
    this.props.onChange({key: 'ids', value: new_state});
  },
  delete() {
    var new_state = update(this.state.ids, {$splice: [[this.state.ids.length - 1, 1]]});
    this.setState({ ids: new_state });
    this.props.onChange({key: 'ids', value: new_state});
  },
  render() {
    const style = Object.assign({},{
      borderRight: 'solid'
    });

    var ids = this.state.ids.map((id) => {
      return <IdPasswordForm key={id.index} index={id.index} id={id.id} password={id.password} onChangeName={this.changeText}/>;
    });
    return (
      <div style={style}>
	{ids}
	<button onClick={this.onClick}>+</button>
	<button onClick={this.delete}>-</button>
      </div>
    );
  }
});

var IdPasswordForm = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired
  },
  changeContentName: function(e) {
    this.props.onChangeName({key: 'content', value: e.target.value, index: this.props.index});
  },
  changeId: function(e) {
    this.props.onChangeName({key: 'id', value: e.target.value, index: this.props.index});
  },
  changePassword: function(e) {
    this.props.onChangeName({key: 'password', value: e.target.value, index: this.props.index});
  },
  render() {
    const style = Object.assign({},{
      marginRight: '10%'
    });

    return (
      <div style={style}>
	<p>コンテンツ名</p>
	<input type="text" value={this.props.content} onChange={this.changeContentName} />
	<p>id</p>
	<input type="text" value={this.props.id} onChange={this.changeId} />
	<p>パスワード</p>
	<input type="text" value={this.props.password} onChange={this.changePassword} />
      </div>
    );
  }
});

export default IdPasswordFormList;
