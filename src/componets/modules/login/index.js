import React from 'react';
import { connect } from 'react-redux';
import {login} from '../../../actions/session.actions';
import {Container, Row, Col} from 'react-bootstrap';
import LoginReduxForm from '../../containers/forms/loginForm';
import HeaderLogin from './HeaderLogin';

class LoginModule extends React.Component {

    send = (values) => {
        let {username, password} = values;
        let body = {
            username,
            password
        }
        this.props.login({body}, () => {
            this.props.history.push('/users/');
        });
    }
    
    render(){
        console.log(this.props.session);
        return(
            <Container style={{marginTop: 30 + 'px'}}>
                <Row>
                    <Col sm={4}></Col>
                    <Col className = "col-sm-4 text-center" style={{boxShadow: '0 4px 18px 0 rgba(0,0,0,0.2)'}}>
                        <HeaderLogin />
                        <LoginReduxForm 
                            /** Custome props */
                            loaded={this.props.session.loaded} 
                            
                            /** Redux Form props */
                            // Default values in form.
                            // props must be equals as 'name' attribute
                            //username={"myDefaultUsername"}
                            //If you have a complete object from reducer,
                            //use copy props to use all atributes
                            //{...this.props.customer}
                            //To handle submit, must be onSubmit
                            onSubmit={this.send} />
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