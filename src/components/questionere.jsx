import React, { Component} from 'react'
import Form from './form'
import ScoreWindow from './scoreWindow'
import axios from "axios"
class Questionere extends Component {
    state = {
    questions:[],
    counter:0,
    score:0,
    statment:'',
    name:'',
    isValid:false
 }
 
 componentDidMount(){
    axios.get('http://localhost:8000/getQuestions')
    .then((res) =>{
     this.setState({
        ...this.state,questions:res.data
     })
    });
}

handleValidation = (valid)=>{
    let Valid = valid
    this.setState({...this.state,isValid:Valid})
}

handleAnswerAction = (value)=>{
     let score = this.state.score
     let counter = this.state.counter
     let statment = this.state.statment
     if(score===0){
         statment= "You look like a decent Man!!"
     }else if(score<2){
         statment= "You aren't in love as it seems!!"
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
            <div className="shadow p-3 rounded mb-5 bg-white rounded card text-left d-flex justify-content-center m-5  " style={{width: 30+"rem",height:22+"rem", position: "fixed",
            top: 50+"%",
            left: 50+"%",
            transform: "translate(-60%, -65%)"}}>
             
        { this.state.isValid?(this.state.counter===this.state.questions.length? <ScoreWindow scoreObj={this.state} length={length}></ScoreWindow> 
          :  <div className="card-body">
        <h3 className="card-title mb-4">Q { this.state.counter+1}/ {this.state.questions.length}</h3>
        <h6 className="card-text m-2 ">{this.state.questions[this.state.counter].question}</h6>
        {this.state.questions[this.state.counter].Answers.map(text=><button  onClick={()=>this.handleAnswerAction(text.isCorrect)} key={text.id} className={"w-100 justify-content-center btn btn-outline-info rounded-pill d-flex flex-column mt-3 "}><p className="m-0 text-center w-100 h-100"  >{text.answerText}</p></button>)}
            </div>):<Form formObj={this.handleValidation}></Form>
    }
          </div>
        
        );
    
}
}
 
export default Questionere;