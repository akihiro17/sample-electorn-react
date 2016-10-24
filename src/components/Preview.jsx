import React from 'react';
import copy from 'copy-to-clipboard';

const CopyButton = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  copyToClipBoard() {
    copy(this.props.text);
  },
  render() {
    return <button style={{marginLeft: '5%', position: 'absolute'}} onClick={this.copyToClipBoard}>copy to clipboard</button>;
  }
});

const PreView = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    game: React.PropTypes.string.isRequired,
    cc: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    division: React.PropTypes.string.isRequired,
    ids: React.PropTypes.array.isRequired,
    changedValue: React.PropTypes.string.isRequired
  },
  render() {
    const style = Object.assign({},{
      overflowY: 'auto',
      marginLeft: '5%',
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '5%'
    });

    const value = [`To: ${this.props.to}`];
    value.push(`Cc: ${this.props.cc}`);
    value.push('');
    value.push(`${this.props.division}の${this.props.name}`);
    value.push('');
    value.push(`「${this.props.game}」のゲームID`);
    value.push('');
    value.push('======================================================');
    value.push('認証情報');
    value.push('');
    this.props.ids.map((id) => {
      value.push(`◎ ${id.content}`);
      value.push(`ID: ${id.id}`);
      value.push(`パスワード: ${id.password}`);
      value.push('');
    });
    value.push('======================================================');
    value.push('');
    const text = value.join('\n');
    return (
      <div style={{flexBasis: '50%', position: 'relative'}}>
        <CopyButton text={text}/>
        <textarea style={style} value={text} readOnly={true}/>
      </div>
    );
  }
});

export default PreView;
