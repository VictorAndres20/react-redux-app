import React from 'react';
import {connect} from 'react-redux';
import {findAllUsers} from '../../../../actions';
import {Container, Row, Col} from 'react-bootstrap';
import UserList from './userList';

class UserModuleList extends React.Component{

    componentDidMount(){
        this.props.findAllUsers();
    }

    render(){
        console.log(this.props.user);
        return(
            <Container fluid = {true}>
                <Row>
                    <Col sm={3}></Col>
                    <Col className="col-sm-6 text-center">
                        <h4 style={{marginTop: 20 + 'px'}}>Listado</h4>
                        <hr />
                        <UserList />
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