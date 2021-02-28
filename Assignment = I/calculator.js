import React from "react";

import Mycomp from './comp';

export default class Calcualtor extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      Oprator: "",
      result: 0,
      output: "",
    }
  }
 
  user1stInput = (event) =>{
    this.setState({
      num1: event.target.value
    });
  }

  user2ndInput = (event) =>{
    this.setState({
      num2: event.target.value
    });
  }

  Sum = () => {
    this.setState({
      Oprator: "+",
      result: "",
      output: ""
    });
  }
  Sub = () => {
    this.setState({
      Oprator: "-",
      result: "",
      output: ""
    });
  }
  Mul = () => {
    this.setState({
      Oprator: "*",
      result: "",
      output: ""
    });
  }
  Divide = () => {
    this.setState({
      Oprator: "/",
      result: "",
      output: ""
    });
  }
  check = () =>{
    if(this.state.Oprator === "+"){
      this.state.output = parseInt(this.state.num1)+parseInt(this.state.num2);
    }
    else if(this.state.Oprator === "-"){
      this.state.output = parseInt(this.state.num1)-parseInt(this.state.num2);
    }
    else if(this.state.Oprator === "*"){
      this.state.output = parseInt(this.state.num1)*parseInt(this.state.num2);
    }
    else if(this.state.Oprator === "/"){
      this.state.output = parseInt(this.state.num1)/parseInt(this.state.num2);
    }
    else{
      this.state.output =  "Press Oprand to Calculate";
    }
    this.setState({
      result: this.state.output,
    });
  }
  Reset = () =>{
    this.setState({
      num1: 0,
      num2: 0,
      Oprator: "",
      result: 0,
      output: ""
    })
  }
  render(){
    return(
      <center>
      <br />
      <br />
      <div style={{backgroundColor: "#ccccff", width:300}}>
        <h2>Calculator</h2>

        <input placeholder="Enter first value" value={this.state.num1} onChange={this.user1stInput}/><br />

        <input placeholder="Enter second value" value={this.state.num2} onChange={this.user2ndInput}/><br />

        <button onClick={this.Sum}>+</button>
        <button onClick={this.Sub}>-</button>
        <button onClick={this.Mul}>*</button>
        <button onClick={this.Divide}>/</button>
        <button onClick={this.check}>=</button>
        <button onClick={this.Reset}>Reset</button>
        
        <br /><br />

        <Mycomp  val1={this.state.num1} val2 ={this.state.num2} val3={this.state.Oprator} val4={this.state.result}/>
      </div>
      </center>
    )
  }
}
