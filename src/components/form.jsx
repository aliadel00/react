import React, { Component } from 'react';
import Greeting from './greeting';
class Form extends Component {
    state = { name:'',isValid:false }
    handleInput = (event) =>{ 
        let name = event.target.value
    this.setState({...this.state,name})

    }
  handleValidation = this.props.formObj
    handleSubmit = (name)=>{
        let isValid = this.state.isValid
        if(name!==""){
            isValid=true
            this.setState({...this.state,name,isValid})

        }
    }
    render() { 
       
        return ( this.state.isValid===false ?
                <form >
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full-Name</label>
                    <input onInput={this.handleInput} className="form-control mb-5"  type="text" required placeholder="enter full name..."/>
                    <button onClick={()=>this.handleSubmit(this.state.name)}  type="button" className="btn btn-outline-info m-2 w-75 ml-5 mt-4">Next</button>
                </div>
                </form>:<Greeting name={this.state.name} qIsValid={this.handleValidation}></Greeting>
                
);
    }
}
 
export default Form;