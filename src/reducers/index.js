import {combineReducers} from 'redux'
import candidateReducer from './candidateReducer'
import zipcodeSubmitReducer from './zipcodeSubmitReducer'


const rootReducer = combineReducers({ 
   candidates: candidateReducer,
   zipcode: zipcodeSubmitReducer
   
})

export default rootReducer 