import React from 'react';
import update from 'immutability-helper';

const IdPasswordFormList = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      ids: [ {id: '', password: "", content: "", index: 0} ]
    };
  },
  changeText(changeset) {
    const new_state = this.state.ids.map((id) => {
      if (id.index == changeset.index) {
	switch(changeset.key) {
	case 'content':
          return ({id: id.id, password: id.password, content: changeset.value, index: id.index});
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
    const new_state = update(this.state.ids, {$push: [{id: '', password: '', content: '', index: this.state.ids.length}]});
    this.setState({ids: new_state});
    this.props.onChange({key: 'ids', value: new_state});
  },
  delete() {
    const new_state = update(this.state.ids, {$splice: [[this.state.ids.length - 1, 1]]});
    this.setState({ ids: new_state });
    this.props.onChange({key: 'ids', value: new_state});
  },
  render() {
    const style = Object.assign({},{
    });

    const ids = this.state.ids.map((id) =>
      <IdPasswordForm key={id.index} index={id.index} id={id.id} password={id.password} content={id.content} onChangeIds={this.changeText}/>
    );
    return (
      <div style={style}>
	{ids}
	<button onClick={this.onClick}>+</button>
	<button onClick={this.delete}>-</button>
      </div>
    );
  }
});

const IdPasswordForm = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    onChangeIds: React.PropTypes.func.isRequired
  },
  changeContentName(e) {
    this.props.onChangeIds({key: 'content', value: e.target.value, index: this.props.index});
  },
  changeId(e) {
    this.props.onChangeIds({key: 'id', value: e.target.value, index: this.props.index});
  },
  changePassword(e) {
    this.props.onChangeIds({key: 'password', value: e.target.value, index: this.props.index});
  },
  render() {
    const style = Object.assign({},{
      marginRight: '10%',
      marginBottom: '5%',
      marginTop: '5%',
      borderStyle: 'groove',
      padding: '5%'
    });

    const input_style = Object.assign({},{
      boxSizing: 'content-box',
      width: '100%'
    });

    return (
      <div style={style}>
	<p>コンテンツ名</p>
	<input style={input_style} type="text" value={this.props.content} onChange={this.changeContentName} onContextMenu={this.pasteContent}/>
	<p>id</p>
	<input style={input_style} type="text" value={this.props.id} onChange={this.changeId} onContextMenu={this.pasteId}/>
	<p>パスワード</p>
	<input style={input_style} type="text" value={this.props.password} onChange={this.changePassword} onContextMenu={this.pastePassword}/>
      </div>
    );
  }
});

export default IdPasswordFormList;
