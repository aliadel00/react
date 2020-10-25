import React, { Component } from 'react';
class ScoreWindow extends Component {
    state = { statment:this.props.scoreObj.statment,
    score:this.props.scoreObj.score,
    length:this.props.length 
}
    render() { 
        return ( <div className=" d-flex flex-column justify-content-center"><h2 className="w-100 h-50 text-center mb-3">You scored {this.state.score} out of {this.state.length}</h2>
        <h6  className=" d-flex justify-content-center text-center  w-100">{this.state.statment}</h6>
        </div> 
         );
    }
}
 
export default ScoreWindow;