import React , {useState ,useEffect , useRef} from 'react'
import './Quiz.scss'
import { Card} from 'antd';
import {shuffle} from '../../utilities/Shuffle'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Radio } from 'antd';
import { useSelector, useDispatch} from 'react-redux'
import * as actions from '../../store/action'


const Quiz = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [step , setStep] = useState(0)
    const [value, setValue] = React.useState('');
    const [answerData , setAnswerData] = useState([])
    
    let questions = useSelector(state => state.questions)

    useEffect(() =>{
           let RandomAnswers = shuffle(questions[step].answers);
           setAnswerData(RandomAnswers)
    },[step])
   

    const NextQuestionHandler = () => {
        if(step <4){
            setStep(prevState => prevState +1);
        }
        if(step==4) navigate("/score");
        if(value ==1){
            dispatch(actions.trackCorrect())
        }
    }
    const onChange = e => {
        setValue(e.target.value);
    };

     

    return (
    <>
       {questions &&
        <>
         <div className='Quiz'>
            <h1 className="animate__animated animate__backInLeft">Question {step+1}</h1>
            <Card className='quiz_card' style={{ width: 600}}>
                 <p>{questions[step].question}</p>
                 <Radio.Group onChange={onChange}  >
                     {answerData.map((item ,i ) =>
                     <Radio key={i} value={item.id}>{item.name}</Radio>
                     )}
                 </Radio.Group>
            </Card>
            <Button variant="contained" color="secondary" className='quiz_button' onClick={NextQuestionHandler}>
                Confirm
            </Button>
        </div> 
        </>}
    </>    
    )
}

export default Quiz
