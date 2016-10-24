import React from 'react';

const GameForm = React.createClass({
  propTypes: {
    game: React.PropTypes.string.isRequired,
    onChangeGame: React.PropTypes.func.isRequired
  },
  changeGame(e) {
    this.props.onChangeGame({key: 'game', value: e.target.value});
  },
  paste() {
    if (typeof window.require == 'function') {
      const {clipboard} = window.require('electron');
      this.props.onChangeGame({key: 'game', value: this.props.game + clipboard.readText()});
    }
  },
  render() {
    const style = Object.assign({},{
      boxSizing: 'content-box',
      width: '100%'
    });

    return (
      <div>
	<p>ゲーム名</p>
	<input style={style} type="text" value={this.props.game} onChange={this.changeGame} onContextMenu={this.paste}/>
      </div>
    );
  }
});

export default GameForm;
