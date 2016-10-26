import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let IdPasswordFormList = ({ids, onChangeContent, onChangeId, onChangePassword, addId, deleteId}) => {
  const onClick = () => {
    addId();
  };

  const onDelete = () => {
    deleteId();
  };

  const style = Object.assign({},{
    marginRight: '10%',
    marginBottom: '5%',
    marginTop: '5%',
    borderStyle: 'groove',
    padding: '5%'
  });

  const input_style = Object.assign({},{
    boxSizing: 'content-box',
    width: '100%'
  });

  const id_forms = ids.map((id) => {
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
  });
  return (
    <div>
      {id_forms}
      <button onClick={onClick}>+</button>
      <button onClick={onDelete}>-</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {ids: state.ids};
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeContent: (text, index) => {
      dispatch(actions.changeContent(text, index));
    },
    onChangeId: (text, index) => {
      dispatch(actions.changeId(text, index));
    },
    onChangePassword: (text, index) => {
      dispatch(actions.changePassword(text, index));
    },
    addId: () => {
      dispatch(actions.addId());
    },
    deleteId: () => {
      dispatch(actions.deleteId());
    }
  };
}

IdPasswordFormList.propTypes = {
  ids: PropTypes.array.isRequired,
  onChangeContent: PropTypes.func.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  addId: PropTypes.func.isRequired,
  deleteId: PropTypes.func.isRequired
};

IdPasswordFormList = connect(mapStateToProps, mapDispatchToProps)(IdPasswordFormList);

export default IdPasswordFormList;
