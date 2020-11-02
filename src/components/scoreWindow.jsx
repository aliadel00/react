import React, { Component } from 'react';
import RichEditor from './richtexteditor';
class ScoreWindow extends Component {
    state = { statment:this.props.scoreObj.statment,
    score:this.props.scoreObj.score,
    length:this.props.length ,
    submitValid:false
}
handleSubmit(){
   let state = true
   this.setState({...this.state,submitValid:state})
}
    render() { 
        return ( this.state.submitValid?
            <div className=" d-flex flex-column justify-content-center mt-2"><h2 className="w-100 h-50 text-center mb-3">thank You!!</h2>
            <h6  className=" d-flex justify-content-center text-center  w-100">for FeedBack</h6>
            </div>
            :<div className=" d-flex flex-column justify-content-center mt-2"><h2 className="w-100 h-50 text-center mb-3">You scored {this.state.score} out of {this.state.length}</h2>
        <h6  className=" d-flex justify-content-center text-center  w-100">{this.state.statment}</h6>
        <RichEditor className="mt-5"></RichEditor>
        <button onClick={()=>this.handleSubmit()} type="button" className="btn btn-outline-info m-2 w-75 ml-5 mt-2">Send FeedBack</button>
        </div> 
     
         );
    }
}
 
export default ScoreWindow;