import React from 'react';
import {connect} from 'react-redux';
import {Form, Col, Row, Button} from 'react-bootstrap';
import {setTestOne} from '../../../actions';
import {login} from '../../../actions';

class TestOne extends React.Component{    

    clickTestOne = () => {
        let text = document.getElementById('textOne').value;
        this.props.setTestOne(text);
        this.props.login({
            body:{
                username: 'root',
                password: 'root123'
            }
        });
    }

    render(){
        console.log("12",this.props.testOne);
        console.log("13",this.props.session);
        console.log("14",this.props.loginState);
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
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <label>{this.props.testOne.text}</label>
                        <label>{this.props.session.ok}</label>
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    testOne: state.testOne,
    session: state.session,
    loginState: state.loginState
});


const mapDispatchToProps = {
    setTestOne,
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(TestOne);