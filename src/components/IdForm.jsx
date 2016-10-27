import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const IdForm = ({id, onChangeContent, onChangeId, onChangePassword}) => {
  const style = {
    marginRight: '10%',
    marginBottom: '5%',
    marginTop: '5%',
    borderStyle: 'groove',
    padding: '5%'
  };

  return (
    <div key={id.index} style={style}>
      <FormGroup controlId="formControlsText">
        <ControlLabel>コンテンツ名</ControlLabel>
        <FormControl placeholder="コンテンツ名" value={id.content} onChange={(e) => onChangeContent(e.target.value, id.index)}/>
      </FormGroup>
      <FormGroup controlId="formControlsText">
        <ControlLabel>ID</ControlLabel>
        <FormControl placeholder="ID" value={id.id} onChange={(e) => onChangeId(e.target.value, id.index)}/>
      </FormGroup>
      <FormGroup controlId="formControlsText">
        <ControlLabel>パスワード</ControlLabel>
        <FormControl placeholder="パスワード" value={id.password} onChange={(e) => onChangePassword(e.target.value, id.index)}/>
      </FormGroup>
    </div>
  );
};

IdForm.propTypes = {
  id: PropTypes.object.isRequired,
  onChangeContent: PropTypes.func.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired
};

export default IdForm;
