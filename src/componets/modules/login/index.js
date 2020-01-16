import React from 'react';
import { connect } from 'react-redux';
import {login} from '../../../actions/session.actions';
import {Container, Row, Col} from 'react-bootstrap';
import Login from './Login';

class LoginModule extends React.Component {

    send = () => {
        let body = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        this.props.login({body}, () => {
            alert("Go to home");
        });
    }
    
    render(){
        console.log(this.props.session);
        return(
            <Container style={{marginTop: 30 + 'px'}}>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <Login loaded={this.props.session.loaded} login={this.send} />
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
            
        );
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    login: (body, navigate) => dispatch(login(body, navigate))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModule);