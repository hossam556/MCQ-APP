import React, {useState,useEffect} from 'react'
import './Home.scss'
import { useDispatch} from 'react-redux'
import { Form, Input, Button,Card} from 'antd';
import {useNavigate} from 'react-router-dom';
import {shuffle} from '../../utilities/Shuffle'
import {questions} from '../../data/data'
import * as actions from '../../store/action'

const Home = () => {
    let navigate = useNavigate();
    const [value , setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() =>{
        let qui = shuffle(questions);
        dispatch(actions.shuffleQuestions(qui))
    },[])

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    
    const inputHandler = (e) => {
       setValue(e.target.value)
    }

    const submitHandler = () => {
        if(value) navigate("/quiz");
    }


    return (
        <div className='home'>
            <h1 className="animate__animated animate__bounceInDown">MCQ App</h1>
            <Card className='card' style={{ width: 400}}>
                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input onChange={inputHandler} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="secondary" htmlType="submit" onClick={submitHandler}>
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>             
        </div>
    )
}

export default Home
