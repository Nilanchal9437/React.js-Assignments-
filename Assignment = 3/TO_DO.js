import React from 'react';
import './style.css';

export default class To_do extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            taskArr: [],
            taskInput: "",
            reverseArr: [],
            input1: 0,
            input2: 0,
            sum: 0,
            calculator : [],
            finaldata: [],
        }
    }

    handelInput = (e) =>{
        this.setState({
            taskInput: e.target.value
        })
    }

    handelPush = () =>{
        var temp = this.state.taskArr;
        temp.push(this.state.taskInput);
        this.setState({
            taskArr: temp,
            taskInput: ""
        })
    }

    handelComplete = (index) =>{
        var temp = this.state.taskArr;
        var reverse = temp.splice(index,1);
        var data = this.state.reverseArr;
        this.state.sum = parseInt(this.state.input1) + parseInt(this.state.input2);
        var result = this.state.calculator;
        result.push(this.state.sum);
        reverse = reverse +" = "+ this.state.sum;
        data.push(reverse);
        this.setState({
            taskArr: temp,
            reverseArr: data,
            calculator: result,
            input1: 0,
            input2: 0,
        })
    }

    Inputdata1 = (data) => {
        this.setState({
            input1: data.target.value
        })
    }

    Inputdata2 = (data) => {
        this.setState({
            input2: data.target.value
        })
    }

    handelAverage = () => {
        var i;
        this.state.sum = 0;
        for(i = 0; i<this.state.calculator.length; i++){
            this.state.sum += parseInt(this.state.calculator[i]); 
        }
        this.state.sum = parseInt(this.state.sum)/parseInt(this.state.calculator.length);
        var average = this.state.finaldata;
        average.push(this.state.sum);
        this.setState({
            finaldata: average,
        })
    }
    render(){
        return(
            <div className="data">
                <input value={this.state.taskInput} onChange={this.handelInput} />
                <button disabled={this.state.taskInput === ""? true:false}
                 onClick={this.handelPush}>Add Task</button>
                 <br />
                 <br />
                <h2>Project to do</h2>
                <div className="box">
                    <ol>
                        {this.state.taskArr.map( (signle,index) =>{
                            return(
                                <li>
                                    {signle}
                                    <input value={this.state.input1} onChange={this.Inputdata1}/>
                                    <input value={this.state.input2} onChange={this.Inputdata2}/>
                                    <button onClick={ (e) =>{this.handelComplete(index)}}>Sum</button>
                                </li>
                            )
                        })}
                    </ol>
                </div>
                <div className="box2">
                    <ul>
                        {this.state.reverseArr.map( (next, row) =>{
                            return(
                                <li>
                                    {next}
                                </li>
                            )
                        })}
                    </ul>
                    <button onClick={this.handelAverage}>Average</button>
                </div>
                <div className="box3">
                    <ol>
                        {this.state.finaldata.map( (access, finalresult) => {
                            return(
                                <li>
                                    Average {finalresult+1} is = {access}
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}
