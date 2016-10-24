import React from 'react';

const CcForm = React.createClass({
  propTypes: {
    cc: React.PropTypes.string.isRequired,
    onChangeCc: React.PropTypes.func.isRequired
  },
  changeCc(e) {
    this.props.onChangeCc({key: 'cc', value: e.target.value});
  },
  paste() {
    if (typeof window.require == 'function') {
      const {clipboard} = window.require('electron');
      this.props.onChangeCc({key: 'cc', value: this.props.cc + clipboard.readText()});
    }
  },
  render() {
    const style = Object.assign({},{
      boxSizing: 'content-box',
      width: '100%'
    });

    return (
      <div>
	<p>Cc:</p>
	<input style={style} type="text" value={this.props.cc} onChange={this.changeCc} onContextMenu={this.paste}/>
      </div>
    );
  }
});

export default CcForm;
