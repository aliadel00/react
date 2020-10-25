import React, { Component} from 'react';
import Form from './form';
import ScoreWindow from './scoreWindow';

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
        answer:[{answerText:"self-Discipline",isCorrect:false, id:1},{answerText:"My Brains",isCorrect:true, id:2},{answerText:"My Money",isCorrect:false, id:3}],
       id:3
    }
    ],
    counter:0,
    score:0,
    statment:'',
    name:'',
    isValid:false
 }

handleValidation= (valid)=>{
this.setState({...this.state,isValid:valid})
console.log("X")
}
 handleAnswerAction = (value)=>{
     let score = this.state.score
     let counter = this.state.counter
     let statment = this.state.statment
     if(score===0){
      statment=  "You look like a decent Man!!"
     }else if(score<2){
         statment= "You are'nt in love as it seems!!"
     }else if(score>=2){
         statment= "You are a playboy!!"
     }
     
     if(value){
        this.setState({...this.state,score:score+1,counter:counter+1,statment:statment})
      
     }else{
        this.setState({...this.state,counter:counter+1,statment:statment})
     }
   
}
    render() { 
        let length = this.state.questions.length
        return (  
            <div className="shadow p-3 rounded mb-5 bg-white rounded card text-left d-flex justify-content-center m-5 " style={{width: 30+"rem",height:22+"rem", position: "fixed",
            top: 50+"%",
            left: 50+"%",
            transform: "translate(-60%, -65%)"}}>
             
        { this.state.isValid?(this.state.counter===this.state.questions.length? <ScoreWindow scoreObj={this.state} length={length}></ScoreWindow> 
          :  <div className="card-body">
        <h3 className="card-title mb-4">Q { this.state.counter+1}/ {this.state.questions.length}</h3>
        <h6 className="card-text m-2 ">{this.state.questions[this.state.counter].question}</h6>
        {this.state.questions[this.state.counter].answer.map(text=><button  onClick={()=>this.handleAnswerAction(text.isCorrect)} key={text.id} className={"w-100 justify-content-center btn btn-outline-info rounded-pill d-flex flex-column mt-3 "}><p className="m-0 text-center w-100 h-100"  >{text.answerText}</p></button>)}
            </div>):<Form formObj={this.handleValidation}></Form>
    }
          </div>
        
        );
    
}
}
 
export default Questionere;