import React, { Component } from 'react';

var Text = React.createClass({
  getInitialState() {
    return {
      textValue: "initial value"
    };
  },
  changeText(e) {
    this.setState({textValue: e.target.value});
  },
  render() {
    return (
      <div>
        <p>これは{this.state.textValue}です</p>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
      </div>
    );
  }
});

const WebView = React.createClass({
  render() {
    return(
      <webview src="http://qiita.com" autosize="on"></webview>
    )
  }
});


const View = () => (
<div>
  <Text />
  <WebView />
</div>
)
export default View;
