import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let ToForm = ({to, dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  const onChange= (e) => {
    dispatch(actions.changeTo(e.target.value));
  };

  return (
    <div style={style}>
      <p>To:</p>
      <input style={style} type="text" value={to} onChange={onChange}/>
    </div>
  );
};

ToForm.propTypes = {
  to: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { to: state.to };
}

ToForm = connect(mapStateToProps)(ToForm);

export default ToForm;
