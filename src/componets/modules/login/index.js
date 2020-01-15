import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Login from './Login';

const LoginModule = () => {
    return(
        <Container>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <Login />
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        
    );
}

export default LoginModule;