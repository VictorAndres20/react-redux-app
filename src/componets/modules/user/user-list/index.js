import React from 'react';
import {connect} from 'react-redux';
import {findAllUsers} from '../../../../actions';
import {Container, Row, Col} from 'react-bootstrap';
import {Badge} from 'antd';
import UserList from './userList';

class UserModuleList extends React.Component{

    componentDidMount(){
        this.props.findAllUsers();
    }

    render(){
        console.log(this.props.user);
        let {loaded , list} = this.props.user;
        return(
            <Container style={{marginTop: 20 + 'px'}} fluid = {true}>
                <Row>
                    <Col sm={3}></Col>
                    <Col className="col-sm-6 text-center">
                        <Badge count={list.length}>
                            <h4>Users</h4>
                        </Badge>                        
                        <hr />
                        <UserList loaded={loaded} data={list} />
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = {
    findAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserModuleList);