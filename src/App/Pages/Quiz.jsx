import React from 'react'
import ClimateQuestion from '../components/ClimateQuestion'
import {QuizDiv} from '../AppStyles'
export default function Quiz ({}) {
let x = 1 
return (
    
        <QuizDiv>
        <h1>
            Candidate Matcher
        </h1>
        <h2>
            Question x
        </h2>
         <ClimateQuestion/>
        </QuizDiv>
    
)

}