import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let DivisionForm = ({division, dispatch}) => {
  const style = {
    boxSizing: 'content-box',
    width: '100%'
  };

  const changeDivision = (e) => {
    dispatch(actions.changeDivision(e.target.value));
  };

  return (
    <div>
      <p>所属:</p>
      <input style={style} type="text" value={division} onChange={changeDivision} />
    </div>
  );
};

DivisionForm.propTypes = {
  division: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { division: state.division };
}

DivisionForm = connect(mapStateToProps)(DivisionForm);

export default DivisionForm;
