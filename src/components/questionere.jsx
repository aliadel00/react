import React, { Component, useState } from 'react';

class Questionere extends Component {
    state = {questions:[{
        question : "What do you remember most about your first crush?",
        answer:[{answerText:"i hate her",isCorrect:true, id:1},{answerText:"i love her",isCorrect:false, id:2},{answerText:"kinda miss her",isCorrect:false, id:3}],
       id:1
    },
    {
        question : "What's the most spontaneous thing you've ever done?",
        answer:[{answerText:"told crush bout ur love",isCorrect:false, id:1},{answerText:"get into jail",isCorrect:false, id:2},{answerText:"smoked weed",isCorrect:true, id:3}],
      id:2
    },
    {
        question : "If you had to name one thing that makes you stand out from others, what would that be?",
        answer:[{answerText:"invent a time machine",isCorrect:false, id:1},{answerText:"start a business",isCorrect:true, id:2},{answerText:"make some money",isCorrect:false, id:3}],
       id:3
    }
    ],
    counter:0,
    score:0,
 }

 handleAnswerAction = (value)=>{
     let score = this.state.score
     if(value===true){
        this.setState({...this.state,score:score+1})
     }
    
 }
 
    handleCounter = () => {
        let counter = this.state.counter
        this.setState({...this.state,counter:counter+1})
    }
    render() { 
        return (  
            
            <div className="shadow p-3 mb-5 bg-white rounded card text-left d-flex justify-content-center m-5 container-fluid" style={{width: 30+"rem",height:22+"rem", position: "fixed",
            top: 50+"%",
            left: 50+"%",
            transform: "translate(-60%, -65%)",borderEndEndRadius:40}}>
        { this.state.counter===this.state.questions.length? <div className=" d-flex justify-content-center" on><h3 className="d-flex flex-column mb-3">You scored {this.state.score} out of {this.state.questions.length}</h3></div> :  <div className="card-body">
        <h5 className="card-title">Q { this.state.counter+1}/{this.state.questions.length}</h5>
        <p className="card-text">{this.state.questions[this.state.counter].question}</p>
        {this.state.questions[this.state.counter].answer.map(text=><button onClick={()=>this.handleAnswerAction(text.isCorrect)}  key={text.id} className={"btn btn-light rounded-pill d-flex flex-column m-3"}>{text.answerText}</button>)}
       <buttton onClick={this.handleCounter} className="btn btn-primary float-right ">Next Question</buttton>
            </div>
    }
          </div>
        
        );
    
}
}
 
export default Questionere;