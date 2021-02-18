import React, { useState } from 'react'
import ClimateQuestion from '../components/ClimateQuestion'
import {QuizDiv} from '../AppStyles'
export default function Quiz () {

const handleClick = () => {

    increaseQuestionNumber()
    
}
const [questionNumber, increaseQuestionNumber] = useState(1)
return (
    
        <QuizDiv>
        <h1>
            Candidate Matcher
        </h1>
         <ClimateQuestion />
        </QuizDiv>
    
)

}