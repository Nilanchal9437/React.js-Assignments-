import React from 'react';

export default class Design extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: 0,
            ColoR: "",
        }
    }

    Inputdata = (n) => {
        this.setState({
            data: parseInt(n.target.value)
        })
    }

    componentDidUpdate(){
        if(this.state.data === 0){
            this.state.ColoR = "#ff564a";
        }
        else if(this.state.data > 0  && this.state.data < 8){
            this.state.ColoR = "#fac177";
        }
        else if(this.state.data > 8 && this.state.data < 16){
            this.state.ColoR = "#f8fa77";
        }
        else if(this.state.data > 16 && this.state.data < 20){
            this.state.ColoR = "#77face";
        }
        else if(this.state.data > 20 && this.state.data < 24){
            this.state.ColoR = "#77c6fa";
        }
        else if(this.state.data > 24 && this.state.data < 30){
            this.state.ColoR = "#abfa77";
        }
        else if(this.state.data > 30 && this.state.data < 35){
            this.state.ColoR = "#2afa2a";
        }
    }

    render(){
        return(
            <center>
            <div style={{
                backgroundColor: "#e8d2f7",
                width: 500,
                height: 300,
                borderRadius: 10,
                textAlign: "center",
            }}>
                <h1>Button Edit</h1>
                <span style={{backgroundColor: "#fdfdfd",
                              fontSize:40,
                              boxShadow:"0px 10px 10px 0px #000000, 0px 6px 5px 0px #ccccef",}}>
                    <input type="range" min="0" max="35" value={this.state.data} onChange={this.Inputdata}
                    style={{
                        width: 200,
                        height:30,
                    }}/>
                </span>
                <br/>
                <br/>
                <button style={{borderRadius: this.state.data,
                     fontSize: 50,
                     backgroundColor: this.state.ColoR
                     }}>Border Radius</button>
                <br/>
                <br/>
                <script>

                </script>

                <span style={{ backgroundColor: this.state.ColoR, width: 200, fontSize: 30}}>
                    {this.state.data === 0 && "You are in Min Range"}
                    {this.state.data > 0 && this.state.data < 35 ?"You are in Mid Range":""}
                    {this.state.data === 35 &&"You are in Max Range"}
                </span>
            </div>
            </center>
        )
    }
}
