import React from 'react';

const NameForm = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    onChangeName: React.PropTypes.func.isRequired
  },
  changeName(e) {
    this.props.onChangeName({key: 'name', value: e.target.value});
  },
  paste() {
    if (typeof window.require == 'function') {
      const {clipboard} = window.require('electron');
      this.props.onChangeName({key: 'name', value: this.props.name + clipboard.readText()});
    }
  },
  render() {
    const style = Object.assign({},{
      boxSizing: 'content-box',
      width: '100%'
    });

    return (
      <div>
	<p>名前</p>
	<input style={style} type="text" value={this.props.name} onChange={this.changeName} onContextMenu={this.paste}/>
      </div>
    );
  }
});

export default NameForm;
