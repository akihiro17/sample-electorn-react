import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

const Hello = React.createClass({
  render() {
    return(
      <h1>Hello, {this.props.name}!</h1>,
      <webview src="http://qiita.com" autosize="on"></webview>
    )
  }
});

export default Hello;
