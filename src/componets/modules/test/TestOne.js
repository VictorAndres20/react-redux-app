import React from 'react';
import {connect} from 'react-redux';
import {Form, Col, Row, Button} from 'react-bootstrap';
import {testOne} from '../../../actions';

class TestOne extends React.Component{    

    clickTestOne = () => {
        let text = document.getElementById('textOne').value;
        alert(text);
        this.props.testOne(text);
    }

    render(){
        return(
            <Form>
                <Form.Group as={Row} controlId="formHorizontalText">
                    <Form.Label column sm={3}>
                        Text:
                    </Form.Label>
                    <Col sm={9}>
                    <Form.Control id="textOne" type="email" placeholder="Type something" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick = {this.clickTestOne}  type="button">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    testOne: (text) => dispatch(testOne(text))
});

export default connect(null, mapDispatchToProps)(TestOne);