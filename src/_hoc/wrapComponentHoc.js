import React from 'react';

export const setPropsAsInitial = WrappedComponent => (
    class extends React.Component{
        render(){
            return <WrappedComponent 
                {...this.props} 
                initialValues = {this.props}
                //enableReinitialize //This if you want to reset values before submit success            
            />
        }
    }
)