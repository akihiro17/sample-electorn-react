import React, { Component } from 'react';

var PreView = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    game: React.PropTypes.string.isRequired,
    changedValue: React.PropTypes.string.isRequired
  },
  render() {
    const style = Object.assign({},{
    });

    var id_list = this.props.ids.map((id) => {
      return (<dl key={id.index}>
	      <dt>content: {id.content}</dt>
	      <dt>ID: {id.id}</dt>
	      <dt>PASSWORD: {id.password}</dt>
	      </dl>
	     );
    });

    return (
	<div style={style}>
	  <p>To: {this.props.to}</p>
          <p>名前は「{this.props.name}」です</p>
          <p>ゲーム名「{this.props.game}」です</p>
	  {id_list}
	</div>
    );
  }
});

export default PreView;
