import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {setPropsAsInitial} from '../../../_hoc/wrapComponentHoc';
import { Form, Icon, Input, Button} from 'antd';
import {isRequired} from '../../../_helpers/redux-form-valiations';
import SpinnerApp from '../../containers/spinner';

const LoginForm = (props) => {
    let {handleSubmit} = props;
    return(
        <Form onSubmit = {handleSubmit} className="login-form">
            <Field 
                name="username"
                component = {TextField}
                type = 'text'
                validate = {[isRequired]}
            />
                        
            <Field 
                name="password"
                component = {TextPassword}
                validate = {[isRequired]}
            />
        
            <Form.Item>
                {displayButton(props)}
            </Form.Item>
        </Form>
    );
}

const TextField = ({input, meta}) => (
    <Form.Item validateStatus={meta.error ? "error" : ""}>
        <Input {...input}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
        />
        {meta.error && <span>{meta.error}</span>}
    </Form.Item>
);

const TextPassword = ({input, meta}) => (
    <Form.Item validateStatus={meta.error ? "error" : ""}>
        <Input.Password {...input}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            allowClear
            placeholder="Password"
            />
        {meta.error && <span>{meta.error}</span>}
    </Form.Item>
);

const displayButton = (props) => {
    console.log(props);
    if(! props.loaded){
        return(<SpinnerApp />);
    } else {
        return(
        <Button
            style={{width: 100 + '%'}}
            type="primary" 
            htmlType="submit" 
            className="login-form-button">
            Log in
        </Button>
        );
    }
}

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm);

export default setPropsAsInitial(LoginReduxForm);