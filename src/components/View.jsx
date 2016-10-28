import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PreView from '../containers/Preview';
import FormWrapper from './FormWrapper.jsx';

const View = () => {
  const style = {
    marginTop: '2%'
  };

  return(
    <Grid style={style}>
      <Row className="show-grid">
        <Col xs={6} md={6}><FormWrapper /></Col>
        <Col xs={6} md={6}><PreView /></Col>
      </Row>
    </Grid>
  );
};

export default View;
