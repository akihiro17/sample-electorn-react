import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import IdForm from './IdForm';

let IdPasswordFormList = ({ids, onChangeContent, onChangeId, onChangePassword, addId, deleteId}) => {
  const onClick = () => {
    addId();
  };

  const onDelete = () => {
    deleteId();
  };

  const id_forms = ids.map((id) => <IdForm key={id.index} id={id} onChangeContent={onChangeContent} onChangeId={onChangeId} onChangePassword={onChangePassword}/> );

  return (
    <div>
      {id_forms}
      <button onClick={onClick}>コンテンツを追加</button>
      <button onClick={onDelete}>コンテンツを削除</button>
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
