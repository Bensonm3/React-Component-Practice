import * as React from "react";
import './App.css'

class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: 100,
            height: 50,
            borderRadius: '0%',
            color: 'Grey',
            colorList: ['red','orange','yellow','green','blue','indigo','violet']
        };
    }
    render(){
        
        const style = {
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
            borderRadius: this.state.borderRadius,
            backgroundColor: this.state.color
        }
        console.log(style)
        return(
            <div className="App">
                <header className="AppHeader"></header>
                <div style={style} className="textContainer"></div>
                <form>Change Width
                    <input type="range" min="20" max="500" step = "5" onChange={this.handleChange} >
                    </input>
                </form>
                <form>Change Height
                    <input type="range" min="20" max="500" step = "5" onInput={this.handleChange1} >
                    </input>
                </form>
                <br></br>
                <div>
                    <button onClick={this.handleClick}>Random color</button>
                </div>
                <br></br>
                <div>Circle?
                    <label>
                        <input type="checkbox" onChange={this.handleCheck}></input>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        )
    }
    handleChange = (e) => {this.setState({width: e.target.value }); console.log("Changed amount "+e.target.value)}
    handleChange1 = (e) => {this.setState({height: e.target.value }); console.log("Changed amount "+e.target.value)}
    handleClick = (e) =>{this.setState({color: this.state.colorList[Math.floor(Math.random()*this.state.colorList.length)]}); console.log(Math.floor(Math.random())*this.state.colorList.length)}
    handleCheck = (e) =>{if(this.state.borderRadius == '0%'){this.setState({borderRadius: '50%'})} else {this.setState({borderRadius: '0%'})}}
}

export default Component