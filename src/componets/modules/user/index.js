import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../../actions';
import {Container} from 'react-bootstrap';
import NavBar from '../../containers/navBar';
import {UserRoute} from '../../routes/userRoutes';

class UserModule extends React.Component{

    render(){
        return(
            <Container fluid = {true}>
                <NavBar history = {this.props.history} exit = {this.props.logout} />
                <UserRoute />
            </Container>
        );
    }
}

const mapDispatchToProps = {
    logout
}

export default connect(null, mapDispatchToProps)(UserModule);