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

const PreViewTemplate = ({text}) => {
  const style = Object.assign({},{
    overflowY: 'auto',
    marginLeft: '5%',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '5%'
  });

  return (
    <div style={{flexBasis: '50%', position: 'relative'}}>
      <CopyButton text={text}/>
      <textarea style={style} value={text} readOnly={true}/>
    </div>
  );
};

PreViewTemplate.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default PreViewTemplate;
