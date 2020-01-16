import React from 'react';
import SpinnerApp from '../../containers/spinner';
import { Form, Icon, Input, Button} from 'antd';

const Login = (props) => {
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
            {displayButton(props)}
          </Form.Item>
        </Form>
      );
}

const displayButton = (props) => {
  console.log(props);
  if(! props.loaded){
    return(
      <div>Loading...</div>
    );
  } else {
    return(
      <Button onClick={() => props.login()} type="primary" htmlType="button" className="login-form-button">
          Log in
      </Button>
    );
  }
}

export default Login;