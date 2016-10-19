import React, { Component } from 'react';

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

export default NameForm;
