import React, { Component } from 'react';
import update from 'immutability-helper';

var FormWrapper = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired
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
          <ContentForm content={this.props.content} onChangeName={this.changeText}/>
          <IdPasswordFormList onChange={this.changeText}/>
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

var ContentForm = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },
  changeContent: function(e) {
    this.props.onChangeName({key: 'content', value: e.target.value});
  },
  render() {
    return (
        <div>
	  <p>content</p>
	  <input type="text" value={this.props.content} onChange={this.changeContent} />
        </div>
    );
  }
});

var IdPasswordForm = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired
  },
  changeId: function(e) {
    this.props.onChangeName({key: 'id', value: e.target.value, index: this.props.index});
  },
  changePassword: function(e) {
    this.props.onChangeName({key: 'password', value: e.target.value, index: this.props.index});
  },
  render() {
    return (
      <div>
	<p>id</p>
	<input type="text" value={this.props.id} onChange={this.changeId} />
	<p>パスワード</p>
	<input type="text" value={this.props.password} onChange={this.changePassword} />
      </div>
    );
  }
});

var IdPasswordFormList = React.createClass({
  getInitialState() {
    return {
      ids: [ {id: '', password: "", index: 0}, {id: '', password: "", index: 1} ]
    };
  },
  changeText: function(changeset) {
    var new_state = this.state.ids.map((id) => {
      if (id.index == changeset.index) {
	var target_id = this.state.ids[changeset.index];
	switch(changeset.key) {
	case 'id':
	  return {id: changeset.value, password: id.password, index: id.index};
	case 'password':
	  return {id: id.id, password: changeset.value, index: id.index};
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
    this.setState({ids: this.state.ids.concat([{id: '', password: '', key: this.state.ids.length + 1}])});
  },
  render() {
    var ids = this.state.ids.map((id) => {
      return <IdPasswordForm key={id.index} index={id.index} id={id.id} password={id.password} onChangeName={this.changeText}/>;
    });
    return (
      <div>
	{ids}
	<button onClick={this.onClick}>+</button>
      </div>
    );
  }
});

var PreView = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    changedValue: React.PropTypes.string.isRequired
  },
  render() {
    const style = Object.assign({},{
    });

    var tds = this.props.ids.map((id) => {
      return (<tr>
	      <td>{id.id}</td>
	      <td>{id.password}</td>
	      </tr>
	     );
    });

    return (
	<div style={style}>
	  <p>To: {this.props.to}</p>
          <p>テストフォームの値は「{this.props.text}」です</p>
          <p>名前は「{this.props.name}」です</p>
          <p>コンテント「{this.props.content}」です</p>
	  <table>
	    <tr>
	      <th>ID</th>
	      <th>パスワード</th>
	    </tr>
	    {tds}
	  </table>
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
      ids: [ {id: '', password: "", index: 0}, {id: '', password: "", index: 1} ],
      content: ""
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
    case 'content':
      this.setState({content: changeset.value, changedValue: changeset.key});
      break;
    case 'ids':
      console.log(changeset.value);
      this.setState({ids: changeset.value, changedValue: changeset.key});
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
	   content={this.state.content}
	/>
	<PreView
	   text={this.state.text}
	   name={this.state.name}
	   to={this.state.to}
	   content={this.state.content}
	   ids={this.state.ids}
	   changedValue={this.state.changedValue}
	/>
	</div>
    );
  }
});

export default View;
