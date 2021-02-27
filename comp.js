import React from "react";

export default class Mycomp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a: "Operand"
        }
    }
    
    render(){
        if( this.props.val3 == "+")
        {
            this.state.a = "Addition of";
        }
        else if(this.props.val3 == "-")
        {
            this.state.a = "Substraction of";
        }
        else if(this.props.val3 == "*")
        {
            this.state.a = "Multiplication of";
        }
        else if(this.props.val3 == "/")
        {
            this.state.a = "Division of";
        }
        else
        {
            this.state.a = "Operand";
        }
        return(
         <div>
            {this.state.a} [ {this.props.val1} ({this.props.val3}) {this.props.val2} ] = {this.props.val4}
        </div>
        )
    }
}
