import React from 'react';
import copy from 'copy-to-clipboard';
import { Button } from 'react-bootstrap';

const CopyButton = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  copyToClipBoard() {
    copy(this.props.text);
  },
  render() {
    return <Button bsStyle="primary" style={{marginLeft: '5%', position: 'absolute'}} onClick={this.copyToClipBoard}>copy to clipboard</Button>;
  }
});

const PreViewTemplate = ({text}) => {
  const style = {
    overflowY: 'auto',
    marginLeft: '5%',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '10%'
  };

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
