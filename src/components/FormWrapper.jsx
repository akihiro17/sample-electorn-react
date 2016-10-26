import React from 'react';
import NameForm from '../containers/NameForm';
import ToForm from '../containers/ToForm';
import CcForm from '../containers/CcForm';
import GameForm from '../containers/GameForm';
import DivisionForm from '../containers/DivisionForm';
import IdPasswordFormList from '../containers/IdPasswordFormList.jsx';

const FormWrapper = () => {
  const style = {
    flexBasis: '30%',
    marginLeft: '10%'
  };

  return (
    <div style={style}>
      <ToForm />
      <CcForm />
      <DivisionForm />
      <NameForm />
      <GameForm />
      <IdPasswordFormList />
    </div>
  );
};

export default FormWrapper;
