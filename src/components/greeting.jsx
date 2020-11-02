import React, { Component } from 'react';
import '../greeting.css'
class Greeting extends Component {
    state = { name:this.props.name,isValid:false}
    timeOut=()=>{setTimeout(  ()=>{
    this.setState({...this.state,isValid:true})
    this.props.qIsValid(this.state.isValid)
    },1500)}
    render() { 
        this.timeOut()
        return ( this.state.isValid?null:<div className="d-flex flex-column">
        <h3 className="text-center mb-3 " >Welcome!</h3> 
    <h1 className="text-center greeting">{this.state.name}</h1>
    </div>);
    }
}
 
export default Greeting;