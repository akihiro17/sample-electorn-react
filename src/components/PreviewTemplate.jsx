import React from 'react';
import copy from 'copy-to-clipboard';
import { Button } from 'react-bootstrap';
import Textarea from 'react-textarea-autosize';

const CopyButton = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  copyToClipBoard() {
    copy(this.props.text);
  },
  render() {
    return <Button bsStyle="primary" onClick={this.copyToClipBoard}>copy to clipboard</Button>;
  }
});

const PreViewTemplate = ({text}) => {
  const style = {
    backgroundColor: 'white',
    width: '100%',
    marginTop: '2%'
  };

  return (
    <div>
      <CopyButton text={text}/>
      <Textarea style={style} value={text} readOnly={true}></Textarea>
    </div>
  );
};

PreViewTemplate.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default PreViewTemplate;
