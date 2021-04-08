import React, { Component } from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            ErrorHandle : false

        }
    }
    componentDidCatch(){
        this.setState({ErrorHandle : true})
    }

    render(){
        if (this.state.ErrorHandle){
            return <h1>Olley YEah toh Galat h </h1>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundry;