import React from 'react';
import {validateSession} from '../_helpers/sessionHelper';

const WrapAuthComponent = (AuthComponent) => (
    class extends React.Component{
        render(){
            if(validateSession()){
                return(<AuthComponent {...this.props} />);
            } else {
                return(
                    <>
                        Unauthorized
                    </>
                );
            }
        }
    }
);

export default WrapAuthComponent;

