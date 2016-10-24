import React from 'react';

const DivisionForm = React.createClass({
  propTypes: {
    division: React.PropTypes.string.isRequired,
    onChangeDivision: React.PropTypes.func.isRequired
  },
  changeDivision(e) {
    this.props.onChangeDivision({key: 'division', value: e.target.value});
  },
  paste() {
    if (typeof window.require == 'function') {
      const {clipboard} = window.require('electron');
      this.props.onChangeDivision({key: 'division', value: this.props.division + clipboard.readText()});
    }
  },
  render() {
    const style = Object.assign({},{
      boxSizing: 'content-box',
      width: '100%'
    });
    return (
      <div>
	<p>所属:</p>
	<input style={style} type="text" value={this.props.division} onChange={this.changeDivision} />
      </div>
    );
  }
});

export default DivisionForm;
