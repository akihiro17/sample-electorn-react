import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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
    height: '100%'
  };

  //       <CopyButton text={text}/>
  return (
     <FormGroup controlId="formControlsTextarea">
       <ControlLabel>Textarea</ControlLabel>
       <FormControl componentClass="textarea" placeholder="textarea" value={text} readOnly={true}/>
    </FormGroup>
  );
};

PreViewTemplate.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default PreViewTemplate;
