import React from 'react';

const ToForm = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    onChangeTo: React.PropTypes.func.isRequired
  },
  changeTo(e) {
    this.props.onChangeTo({key: 'to', value: e.target.value});
  },
  paste() {
    if (typeof window.require == 'function') {
      const {clipboard} = window.require('electron');
      this.props.onChangeTo({key: 'to', value: this.props.to + clipboard.readText()});
    }
  },
  render() {
    const style = Object.assign({},{
      boxSizing: 'content-box',
      width: '100%'
    });

    return (
      <div style={style}>
	<p>To:</p>
	<input style={style} type="text" value={this.props.to} onChange={this.changeTo} onContextMenu={this.paste}/>
      </div>
    );
  }
});

export default ToForm;
