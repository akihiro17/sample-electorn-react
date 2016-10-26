import React from 'react';
import PreView from '../containers/Preview';
import FormWrapper from '../containers/FormWrapper.jsx';

const View = () => {
  const style = Object.assign({},{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  });

  return(
    <div style={style}>
      <FormWrapper />
      <PreView />
    </div>
  );
};

export default View;
