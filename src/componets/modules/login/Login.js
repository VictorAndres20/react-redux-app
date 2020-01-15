import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../../actions';
import { Form, Icon, Input, Button} from 'antd';

class Login extends React.Component{

    send = () => {
        let body = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        this.props.login({body}, () => {
            alert("Go to home");
        });
    }

    render() {
        console.log(this.props.session);
        return (
            <Form className="login-form">
              <Form.Item>                
                <Input
                  id='username'
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>                
                <Input
                  id='password'
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button onClick={this.send} type="primary" htmlType="button" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          );
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    login: (body, navigate) => dispatch(login(body, navigate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);