import React from 'react'
import { Card, But} from 'antd';
import '../Score/Score.scss'
import { useSelector} from 'react-redux'

const Score = () => {
    let correct = useSelector(state => state.correct);

    return (
        <div className='score'>
            <Card className='score_card' style={{ width: 600}}>
                 <p>Your Score is : {correct} / 5</p>
            </Card>
        </div>
    )
}

export default Score
