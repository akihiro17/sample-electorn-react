import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

let CcForm = ({dispatch}) => {
  const style = Object.assign({},{
    boxSizing: 'content-box',
    width: '100%'
  });

  const changeCc = (e) => {
    e.preventDefault();
    dispatch(actions.changeCc(e.target.value));
  };

  return (
    <div>
      <p>Cc:</p>
      <input style={style} type="text" onChange={changeCc}/>
    </div>
  );
};

CcForm = connect()(CcForm);

export default CcForm;
