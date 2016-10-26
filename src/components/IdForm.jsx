import React, { PropTypes } from 'react';

const IdForm = ({id, onChangeContent, onChangeId, onChangePassword}) => {
  const style = {
    marginRight: '10%',
    marginBottom: '5%',
    marginTop: '5%',
    borderStyle: 'groove',
    padding: '5%'
  };

  const input_style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  return (
    <div key={id.index} style={style}>
      <p>コンテンツ名</p>
      <input style={input_style} type="text" value={id.content} onChange={(e) => onChangeContent(e.target.value, id.index)}/>
        <p>id</p>
        <input style={input_style} type="text" value={id.id} onChange={(e) => onChangeId(e.target.value, id.index)}/>
          <p>パスワード</p>
          <input style={input_style} type="text" value={id.password} onChange={(e) => onChangePassword(e.target.value, id.index)}/>
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
