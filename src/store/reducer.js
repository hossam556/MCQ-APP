import * as actionTypes from './actionTypes';

const initialState ={
    questions : JSON.parse(localStorage.getItem('ques')) ?
                JSON.parse(localStorage.getItem('ques')) : [] ,
    correct : 0            
};

const reducer = (state=initialState , action)=>{
      switch(action.type){
          case actionTypes.SHUFFLE_QUESTIONS :
               localStorage.setItem('ques',JSON.stringify(action.questions))
              return{
                  ...state ,
                  questions : action.questions
              };   
            case actionTypes.TRACK_CORRECT :
               return{
                   ...state ,
                   correct : state.correct + 1
               };                 
          default :
          return state         
      }
};

export default reducer 