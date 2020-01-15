import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TestOne from './TestOne';

const TestModule = () =>{
    return(
        <Container fluid={false} >
            <Row>
                <Col className="col-sm-4 text-center">
                </Col>
                <Col className="col-sm-4 text-center" style={{marginTop:10 + 'px'}}>
                    <TestOne />
                </Col>
                <Col className="col-sm-4 text-center">
                </Col>
            </Row>
        </Container>
    );
}

export default TestModule;